import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>使用條款 - 咖昕科技 | 服務條款與版權聲明</title>
        <meta name="description" content="咖昕科技網站使用條款：包括服務條款、內容使用規範、智慧財產權說明與免責聲明。" />
      </Helmet>
      <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl">
        {/* 頁面標題 */}
        <h1 className="text-4xl font-bold mb-2 text-gray-900">使用條款</h1>
        <p className="text-lg text-gray-600 mb-8">Terms of Service</p>

        {/* 前言 */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed">
            歡迎您瀏覽咖昕科技有限公司官方網站。本網站所提供之內容，包括但不限於文字、圖片、設計、程式碼、案例說明及其他相關資料，均為本公司或相關權利人所有，受智慧財產權相關法律保護。
          </p>
        </section>

        {/* 使用規範 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">使用規範</h2>
          <p className="text-gray-700 leading-relaxed">
            您同意於合法、合理之範圍內使用本網站，不得從事任何影響網站正常運作、未經授權使用內容、或違反法令之行為。
          </p>
        </section>

        {/* 資訊免責聲明 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">資訊免責聲明</h2>
          <p className="text-gray-700 leading-relaxed">
            本網站所提供之資訊，僅作為服務介紹與一般性說明之用途，實際合作內容、服務範圍、時程及費用，應以雙方另行簽訂之合約或書面約定為準。
          </p>
        </section>

        {/* 修改權利 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">修改權利</h2>
          <p className="text-gray-700 leading-relaxed">
            本公司保留隨時修改、更新、暫停或終止本網站內容與服務之權利，且不另行個別通知。
          </p>
        </section>
      </div>
    </article>
    </>
  );
};

export default TermsOfServicePage;
