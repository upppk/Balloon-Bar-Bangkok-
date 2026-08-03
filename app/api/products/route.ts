import { promises as fs } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const dataPath = join(process.cwd(), 'data', 'products.json');

async function getProducts() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { products: [] };
  }
}

async function saveProducts(data: any) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
  try {
    const data = await getProducts();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await getProducts();

    const newProduct = {
      id: Math.max(...data.products.map((p: any) => p.id), 0) + 1,
      ...body,
      price: parseFloat(body.price),
    };

    data.products.push(newProduct);
    await saveProducts(data);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
