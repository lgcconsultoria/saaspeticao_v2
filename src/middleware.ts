import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware desativado temporariamente para permitir acesso livre a todas as páginas
export async function middleware(req: NextRequest) {
    // Simplesmente permitir todas as requisições sem verificação de autenticação
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Excluir recursos estáticos
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
} 