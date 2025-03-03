import { useState, useEffect } from 'react'
import axios from 'axios'

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  // Verileri çekme işlemi
  useEffect(() => {
    axios.get(baseUrl).then(response => setResources(response.data))
  }, [baseUrl])

  // Yeni bir kaynak ekleme fonksiyonu
  const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    setResources([...resources, response.data])
  }

  return [resources, { create }]
}
