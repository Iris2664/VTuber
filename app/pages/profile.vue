<template>
  <div>
    <div class="relative h-96">
      <img src="~/assets/img/bk-img.webp" alt="background image" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center p-8 text-white">
        <div>
          <h2 class="text-4xl font-bold">プロフィール</h2>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto my-8 md:my-12 px-4">
      <div class="bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-12">
        <header class="border-b-2 border-gray-300 pb-6 mb-8">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 tracking-tight">About Me</h1>
        </header>

        <div class="px-2 sm:px-4 md:px-6">

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">
                陽向あやめ
              </h2>
              <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div class="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                  <img src="@/assets/img/Character-portrait.png" alt="Character portrait"
                    class="w-[200px] h-auto object-cover rounded-lg max-w-xs" />
                </div>
                <div class="w-full md:w-2/3 space-y-4 text-gray-700 text-base">
                  <p>いつからかインターネット空間に住み着いた, 情報通信技術が大好きである猫系Virtual YouTuber.</p>
                  <p>低レイヤー・セキュリティ・情報法が好物で，よくそのあたりを漁っている．</p>
                  <p>重度なTwitterユーザーなので, 何時でもTwitterでゴロゴロしている.</p>
                  <p>配信や交流を通して，つよつよな技術猫目指すにゃ～！</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">プロフィール詳細</h2>
              <div>
                <table class="table-fixed text-left w-full">
                  <tbody>
                    <tr>
                      <th class="pr-6">ニックネーム</th>
                      <td>ひなあや</td>
                    </tr>
                    <tr>
                      <th class="pr-6">誕生日</th>
                      <td>5月中旬</td>
                    </tr>
                    <tr>
                      <th class="pr-6">初配信日</th>
                      <td>2024年8月26日</td>
                    </tr>
                    <tr>
                      <th class="pr-6">身長</th>
                      <td>160cm～170cm</td>
                    </tr>
                    <tr>
                      <th class="pr-6">趣味</th>
                      <td>旅行，漫画，アニメ鑑賞，プログラミング，ファッション</td>
                    </tr>
                    <tr>
                      <th class="pr-6">イラストレーター</th>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <th class="pr-6">モデラー</th>
                      <td>陽向あやめ</td>
                    </tr>
                    <tr>
                      <th class="pr-6">ファンネーム</th>
                      <td>ひなあやリスナー</td>
                    </tr>
                    <tr>
                      <th class="pr-6">ハッシュタグ</th>
                      <td>
                        配信タグ: <a class="text-pink-700" href="https://x.com/search?q=%23hinaayachan&amp;f=live"
                          target="_blank" rel="noopener noreferrer">
                          #hinaayachan
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th class="pr-10"></th>
                      <td>
                        ファンアートタグ: <a class="text-pink-700"
                          href="https://x.com/search?q=%23%E3%81%B2%E3%81%AA%E3%81%82%E3%82%84%E3%83%BC%E3%81%A8&amp;src=hashtag_click"
                          target="_blank" rel="noopener noreferrer">
                          #ひなあやーと
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">Contents</h2>
              <ul class="pt-2 list-disc pl-6 text-gray-700 text-base">
                <li>雑談・企画フリートーク</li>
                <li>競技プログラミング (AtCoderなど)</li>
                <li>CTF (Hack the Boxなど)</li>
                <li>情報法の勉強・IT関連の判例読み</li>
                <li>資格試験の勉強 (情報処理技術者試験, AWS資格, 簿記, 法学系など)</li>
                <li>ゲーム実況</li>
              </ul>
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">ファンとの交流</h2>
              <div class="space-y-4 text-gray-700 text-base">
                <p>私は、ファンとの交流を非常に大切にしています。彼女は以下の方法でファンと積極的にコミュニケーションを図っています：</p>
                <ul class="list-disc pl-6">
                  <li>コメント返信：配信中や動画のコメント欄で、視聴者からのコメントに返信します。</li>
                  <li>SNS活動：TwitterやInstagramなどのSNSを通じて、日常の出来事や配信情報を発信します。</li>
                  <li>ファンイベント：定期的にファンとの交流イベントを開催し、直接会ってコミュニケーションを図ります。</li>
                </ul>
                <p>これらの活動を通じて、陽向あやめはファンとの絆を深め、より良いコミュニケーションを築いています。</p>
              </div>
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">Words / Meme
              </h2>
              <div class="space-y-4 text-gray-700 text-base">
                <ul>
                  <li>
                    <h3 class="font-semibold text-lg">にゃ？</h3>
                    <p>疑問なときに鳴く鳴き声．</p>
                  </li>
                  <li>
                    <h3 class="font-semibold text-lg">にゃーん</h3>
                    <p>間延びした直接言いにくいときに鳴く鳴き声．</p>
                  </li>
                  <li>
                    <h3 class="font-semibold text-lg">お尋ねの趣旨が必ずしも明らかではないが</h3>
                    <p>回答を留保したり，拒否したり，一般論で返答するに鳴く鳴き声．</p>
                  </li>
                  <li>
                    <h3 class="font-semibold text-lg">ふむふむ</h3>
                    <p>なんかいい感じのことを言いたいけど思いつかなかったときにとりあえず返事をしたいときに鳴く鳴き声．</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">三面図</h2>
              <img src="~/assets/img/three-view drawing.png" alt="three-view drawing"
                class="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
          </section>

          <section>
            <div class="mb-10">
              <h2 class="text-xl sm:text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-gray-900">論理アバターの使用素材
              </h2>
              <div class="space-y-4 text-gray-700 text-base">
                <section>
                  <h3 class="text-xl font-semibold">髪テクスチャ</h3>
                  <p>【VRoid正式版・β版】TORINGOヘアテクスチャ/Hair texture</p>
                  <p>しらとりこはね( @shiratori_ko3D)</p>
                  <div>
                    <a href="https://shiratori.booth.pm/items/3190732" target="_blank"
                      class="text-blue-500 hover:underline">https://shiratori.booth.pm/items/3190732</a>
                  </div>
                </section>

                <section>
                  <h3 class="text-xl font-semibold">目・アイライン・まつ毛テクスチャ</h3>
                  <p>【VRoid正式版・β版】瞳アイライン眉まつげセット Eye/Eyeline/Eyebrow/Eyelashes</p>
                  <p>しらとりこはね( @shiratori_ko3D)</p>
                  <a href="https://booth.pm/ja/items/3044951" target="_blank"
                    class="text-blue-500 hover:underline">https://booth.pm/ja/items/3044951</a>
                </section>

                <section>
                  <h3 class="text-xl font-semibold">肌テクスチャ</h3>
                  <p>【無料あり】VRoid向け アニメ風肌テクスチャ(顔&体)</p>
                  <p>☪Team Aether</p>
                  <a href="https://booth.pm/ja/items/1247301" target="_blank"
                    class="text-blue-500 hover:underline">https://booth.pm/ja/items/1247301</a>
                </section>

                <section>
                  <h3 class="text-xl font-semibold">髪型</h3>
                  <p>VRoid Hair customitem 贅沢ロング ｰLuxe Longｰ</p>
                  <p>～Starry Sea～☆彡 KOKONE</p>
                  <a href="https://milkpeach.booth.pm/items/6690421" target="_blank"
                    class="text-blue-500 hover:underline">https://milkpeach.booth.pm/items/6690421</a>
                </section>

                <section>
                  <h3 class="text-xl font-semibold">衣装</h3>
                  <p>ミャウディッシュコーデ【VRoid】【Xwear】</p>
                  <p>セタㇻ工房/Setara Workshop</p>
                  <a href="https://setara.booth.pm/items/6621804" target="_blank"
                    class="text-blue-500 hover:underline">https://setara.booth.pm/items/6621804</a>
                </section>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>