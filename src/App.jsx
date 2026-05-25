import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <section className="hero">
        <span className="badge">TEST SITE</span>
        <h1>ELVAGE テストサイト</h1>
        <p className="lead">
          Vite + React で作成した動作確認用のホームページです。
          GitHub Pages でホスティングしています。
        </p>
        <button className="counter" onClick={() => setCount((c) => c + 1)}>
          クリック回数: {count}
        </button>
      </section>

      <section className="cards">
        <article className="card">
          <h2>ビルド</h2>
          <p>Vite による高速な静的ビルド。</p>
        </article>
        <article className="card">
          <h2>デプロイ</h2>
          <p>GitHub Actions で自動公開。</p>
        </article>
        <article className="card">
          <h2>ホスティング</h2>
          <p>GitHub Pages で無料配信。</p>
        </article>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ELVAGE — テスト用</p>
      </footer>
    </main>
  )
}
