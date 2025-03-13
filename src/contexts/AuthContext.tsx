'use client'

import { createContext, useContext, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Contexto de autenticação
type AuthContextType = {
    user: User | null
    loading: boolean
    signIn: (email: string, password: string) => Promise<{ error: any }>
    signOut: () => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider de autenticação - simulando usuário autenticado para permitir acesso livre
export function AuthProvider({ children }: { children: React.ReactNode }) {
    // Estado simulado com usuário autenticado
    const [user, setUser] = useState<User | null>({
        id: 'user-simulado',
        email: 'usuario@exemplo.com',
        app_metadata: {},
        user_metadata: {},
        aud: '',
        created_at: '',
    } as User);
    const [loading, setLoading] = useState(false)

    const supabase = createClientComponentClient()

    // Funções de autenticação simuladas
    async function handleSignIn(email: string, password: string) {
        console.log('Login simulado:', email)
        return { error: null }
    }

    async function handleSignOut() {
        console.log('Logout simulado')
        return { error: null }
    }

    // Valor do contexto com autenticação simulada
    const value = {
        user,
        loading,
        signIn: handleSignIn,
        signOut: handleSignOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook para usar o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }
    return context
}