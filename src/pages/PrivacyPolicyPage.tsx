import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl">
        {/* 頁面標題 */}
        <h1 className="text-4xl font-bold mb-2 text-gray-900">隱私權政策</h1>
        <p className="text-lg text-gray-600 mb-8">Privacy Policy</p>

        {/* 前言 */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            咖昕科技有限公司（以下簡稱「本公司」）重視您的個人資料保護與隱私權。為使您能安心瀏覽與使用本公司官方網站，並透過網站與本公司進行業務洽詢與聯繫，特此說明本公司於個人資料蒐集、處理及利用方面之政策與作法，以保障您的權益。
          </p>
        </section>

        {/* 一、適用範圍 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">一、適用範圍</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本隱私權政策適用於您瀏覽或使用本公司官方網站，以及透過聯絡表單、電子郵件或其他方式與本公司進行聯繫、洽詢或合作時，所涉及之個人資料蒐集、處理與利用行為。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本政策不適用於非本公司所營運或控制之第三方網站、服務或平台，相關資料之處理請依該第三方之隱私權政策為準。
          </p>
        </section>

        {/* 二、個人資料的蒐集項目 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">二、個人資料的蒐集項目</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本公司僅於提供服務或回應需求之必要範圍內，蒐集以下類型之個人資料：
          </p>

          {/* 使用者主動提供之資料 */}
          <h3 className="text-xl font-semibold mb-3 text-gray-800">（一）使用者主動提供之資料</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li>姓名</li>
            <li>公司名稱、職稱</li>
            <li>聯絡方式（如電子郵件、電話）</li>
            <li>專案需求說明、洽詢內容或其他您主動提供之資訊</li>
          </ul>

          {/* 網站瀏覽與系統資訊 */}
          <h3 className="text-xl font-semibold mb-3 text-gray-800">（二）網站瀏覽與系統資訊</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IP 位址</li>
            <li>瀏覽器類型、作業系統</li>
            <li>網站瀏覽紀錄、使用時間</li>
            <li>Cookies 或類似技術所產生之資訊</li>
          </ul>
        </section>

        {/* 三、個人資料蒐集之目的 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">三、個人資料蒐集之目的</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本公司蒐集個人資料之目的，包括但不限於：
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>回覆您的詢問與聯繫需求</li>
            <li>提供系統開發、網站建置、技術整合等服務之相關資訊</li>
            <li>業務洽談、合作評估與專案聯繫</li>
            <li>網站與服務之維護、管理與優化</li>
            <li>法令或主管機關依法要求之事項</li>
          </ul>
        </section>

        {/* 四、個人資料的利用與揭露 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">四、個人資料的利用與揭露</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本公司僅於蒐集目的之必要範圍內，依法、合理及正當方式使用您的個人資料，並不會任意對外出售、交換、出租或揭露您的個人資料。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            於下列情況下，本公司得依法提供或揭露相關資料：
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>依法令規定或主管機關之要求</li>
            <li>為維護本公司、客戶或第三人之合法權益</li>
            <li>為確保網站與系統之正常運作與資訊安全</li>
            <li>經您事前明確同意或授權</li>
          </ul>
        </section>

        {/* 五、第三方服務之使用 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">五、第三方服務之使用</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            為確保網站正常運作與服務品質，本公司可能使用第三方服務（如主機服務、網站分析工具、電子郵件或通訊服務）。於必要範圍內，相關資料可能提供予該第三方處理，並要求其遵守資料保護與保密義務。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本公司不會將您的個人資料用於本政策未載明之用途。
          </p>
        </section>

        {/* 六、Cookies 與網站分析 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">六、Cookies 與網站分析</h2>
          <p className="text-gray-700 leading-relaxed">
            本公司可能使用 Cookies 或其他類似技術，以提升網站使用體驗、進行流量分析及網站優化。您可自行透過瀏覽器設定限制或停用 Cookies，但可能影響部分網站功能之正常使用。
          </p>
        </section>

        {/* 七、資料安全與保護措施 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">七、資料安全與保護措施</h2>
          <p className="text-gray-700 leading-relaxed">
            本公司將採取合理之技術與管理措施，以保護您的個人資料安全，防止未經授權之存取、洩漏、竄改或毀損。惟網際網路資料傳輸仍存在一定風險，敬請理解並自行留意。
          </p>
        </section>

        {/* 八、使用者權利 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">八、使用者權利</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            依相關法令規定，您對於所提供之個人資料，享有以下權利：
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>查詢或請求閱覽</li>
            <li>請求補充、更正或刪除</li>
            <li>請求停止蒐集、處理或利用</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            如欲行使上述權利，請透過本公司聯絡方式與我們聯繫。
          </p>
        </section>

        {/* 九、隱私權政策之修正 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">九、隱私權政策之修正</h2>
          <p className="text-gray-700 leading-relaxed">
            本公司保留隨時修正本隱私權政策之權利，修正後之內容將公告於本網站，不另行個別通知。建議您定期查閱，以確保了解最新政策內容。
          </p>
        </section>

        {/* 十、聯絡方式 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">十、聯絡方式</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            如您對本隱私權政策或個人資料保護有任何疑問，請透過以下方式與本公司聯繫：
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">公司名稱：</span>咖昕科技有限公司
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">電子郵件：</span>
              <a href="mailto:caffxin.tech@gmail.com" className="text-primary-600 hover:text-primary-700">
                caffxin.tech@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default PrivacyPolicyPage;
