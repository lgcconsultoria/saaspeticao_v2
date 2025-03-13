'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalPeticoes: 12,
    peticoesRecentes: 3,
    clientesAtivos: 8
  })
  const [peticoesRecentes, setPeticoesRecentes] = useState([
    { id: 1, titulo: 'Recurso Administrativo - Prefeitura de São Paulo', data: '10/03/2025', cliente: 'TOP X' },
    { id: 2, titulo: 'Impugnação ao Edital - Pregão 123/2025', data: '08/03/2025', cliente: 'DUAL SERVIÇOS' },
    { id: 3, titulo: 'Mandado de Segurança - Licitação 45/2025', data: '05/03/2025', cliente: 'NK CONSTRUTORA' },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total de Petições</h2>
          <p className="text-3xl font-bold text-primary-600">{stats.totalPeticoes}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Petições Recentes</h2>
          <p className="text-3xl font-bold text-primary-600">{stats.peticoesRecentes}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700">Clientes Ativos</h2>
          <p className="text-3xl font-bold text-primary-600">{stats.clientesAtivos}</p>
        </div>
      </div>
      
      {/* Petições Recentes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Petições Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {peticoesRecentes.map((peticao) => (
                <tr key={peticao.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{peticao.titulo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{peticao.data}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{peticao.cliente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}