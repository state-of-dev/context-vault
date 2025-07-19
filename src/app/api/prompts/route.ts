import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    console.log('Fetching prompts...');
    
    // Verificar conexión a la base de datos
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured');
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const prompts = await prisma.prompt.findMany({
      include: {
        author: true,
        category: true,
        subcategory: true,
        aiTool: true
      },
      orderBy: {
        likes: 'desc'
      },
      take: 6
    });

    console.log(`Found ${prompts.length} prompts`);
    return NextResponse.json(prompts);
  } catch (error) {
    console.error('Error fetching prompts:', error);
    console.error('Error details:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to fetch prompts', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}