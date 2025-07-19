import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    console.log('Fetching AI tools...');
    
    // Verificar conexión a la base de datos
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured');
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const aiTools = await prisma.aITool.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        name: 'asc'
      }
    });

    console.log(`Found ${aiTools.length} AI tools`);
    return NextResponse.json(aiTools);
  } catch (error) {
    console.error('Error fetching AI tools:', error);
    console.error('Error details:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to fetch AI tools', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}