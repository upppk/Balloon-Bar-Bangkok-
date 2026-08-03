import { NextRequest, NextResponse } from 'next/server';

export function verifyAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD || 'balloon123';
  return password === adminPassword;
}

export function requireAdminAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.substring(7);
  return verifyAdminPassword(token);
}

export function createAuthToken(password: string): string | null {
  if (verifyAdminPassword(password)) {
    return btoa(password);
  }
  return null;
}
