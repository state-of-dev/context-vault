import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    console.log('Fetching categories...');
    
    // Verificar conexión a la base de datos
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured');
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const categories = await prisma.category.findMany({
      include: {
        subcategories: true
      },
      orderBy: {
        promptCount: 'desc'
      }
    });

    console.log(`Found ${categories.length} categories`);
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    console.error('Error details:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to fetch categories', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}