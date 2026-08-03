import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = btoa(password);
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
