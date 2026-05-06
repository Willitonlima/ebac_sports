import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootState } from './store'
import { addToCart } from './store/slices/cartSlice'
import { toggleFavorite } from './store/slices/favoritesSlice'
import { useGetProductsQuery } from './store/api/productsApi'
import { Produto } from './store/slices/cartSlice'

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProductsQuery()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(addToCart(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
