# Changelog

<a name="0.0.3"></a>
## 0.0.3 (2023-02-02)

### Added

- ✨ : add type for Socket.emit [[69e6da2](https://github.com/juwit/reveal-quiz/commit/69e6da284807ef523d777f70bc31060308b0bf53)]
- ✨ : add Trainee object to the Quiz model [[e010282](https://github.com/juwit/reveal-quiz/commit/e01028252674f0bfb62a903193c1735cb4d70669)]

### Changed

- ♻️ : rewrite event sending &amp; receiving [[dd13028](https://github.com/juwit/reveal-quiz/commit/dd1302876e120ed3ddb63cf1e21288b5da72aed0)]
- 🎨 : format code [[8f7ff55](https://github.com/juwit/reveal-quiz/commit/8f7ff553d6db359050292176dc0fc1e3f7a374fd)]

### Removed

- 🔥 : remove unused content field [[88950c6](https://github.com/juwit/reveal-quiz/commit/88950c65e7e89665ea183b617eab4e194c30bf72)]

### Fixed

- 🐛 : correct a bug when submit button is already removed [[f9d7869](https://github.com/juwit/reveal-quiz/commit/f9d78690655b3a24ff861b77ad6d89649dc4395d)]
- 🐛 : correct change on role [[15b94cf](https://github.com/juwit/reveal-quiz/commit/15b94cf2c13ba9236b6f71c9aa94d5b6d6ae403c)]

### Miscellaneous

- 🔈 : remove timerElement log [[1ca6eb2](https://github.com/juwit/reveal-quiz/commit/1ca6eb253ba1dd7c50c72ab3a9ef5581335b2453)]
-  👷 : add workflow to publish to npm [[a87e25b](https://github.com/juwit/reveal-quiz/commit/a87e25be18fa938931045b538226a07c42a50c66)]
- 🙈 : add node_modules to .gitignore [[f0fe250](https://github.com/juwit/reveal-quiz/commit/f0fe2506a58b6983432b1a1a3197aeb52fbed391)]


<a name="0.0.2"></a>
## 0.0.2 (2023-02-02)

### Added

- 🔊 : log when rendering admin view [[eae3d25](https://github.com/juwit/reveal-quiz/commit/eae3d2566677dcc68c38bce1751865a8569e0965)]

### Changed

- ♻️ : move all dependencies to devDependencies [[edefc14](https://github.com/juwit/reveal-quiz/commit/edefc1437a366527eda4db93ed7222a1aadca766)]
- ♻️ : move css-loader &amp; style-loader to dev dependencies [[9ea5d6d](https://github.com/juwit/reveal-quiz/commit/9ea5d6d5b125abe73892edb84060bf665513cbbd)]

### Miscellaneous

- 📝 : update demo docs [[baa4dbe](https://github.com/juwit/reveal-quiz/commit/baa4dbec7c02f38fd9ddafdb2ef47701ff798ad8)]
- 🙈 : add .npmignore [[9954874](https://github.com/juwit/reveal-quiz/commit/995487452d41b288cb8202dff1aa0517e54c8399)]


<a name="0.0.1"></a>
## 0.0.1 (2023-02-02)

### Added

- ✨ : remove direct css import from demo [[6d4edd3](https://github.com/juwit/reveal-quiz/commit/6d4edd34d9c650fffc50ae45c0ab9a1913645193)]
- ✨ : import css from plugin [[d8ef042](https://github.com/juwit/reveal-quiz/commit/d8ef0423b7e8c2552899d51e113918478dc6613a)]
- ➕ : add css-loader &amp; style-loader dependencies [[3aee526](https://github.com/juwit/reveal-quiz/commit/3aee52648a51668797a16911387e00d07ebcd90d)]
- ✨ : remove the timer view 5 seconds after the timer stop [[c754d77](https://github.com/juwit/reveal-quiz/commit/c754d772a366ef285b4259618e138906fc95b2d8)]
- ✨ : support multiple stop callbacks [[80ba42a](https://github.com/juwit/reveal-quiz/commit/80ba42a5bd1f968504a54e2c5f0a730774ce103f)]
- ✨ : auto answer questions when timer stops [[b015d51](https://github.com/juwit/reveal-quiz/commit/b015d513d689b7aad3b5be872c61b6a9164ebfdd)]
- ✨ : add basic timer view [[a4b936e](https://github.com/juwit/reveal-quiz/commit/a4b936ed861c4a5017b399e7b350680474328130)]
- ✨ : add basic timer model [[232313f](https://github.com/juwit/reveal-quiz/commit/232313f0c91ed211418ecd837c1abcb5264a028e)]
- ✨ : add show() method call when question is shown on screen [[33942cd](https://github.com/juwit/reveal-quiz/commit/33942cd0763eab0c6bff3bad8589e6726100c20b)]
- ✨ : add admin role &amp; view [[b77940c](https://github.com/juwit/reveal-quiz/commit/b77940c5dcedcb828266ea8b6482522aec028351)]
- ✨ : extract reveal component to its own div [[6c6b90d](https://github.com/juwit/reveal-quiz/commit/6c6b90dcb98a2ac2c8c05099db5379d3bb0bf206)]
- ✨ : use notie as node_module instead of global import [[58ee55a](https://github.com/juwit/reveal-quiz/commit/58ee55a2ef9964e7fbc5083f108568b1a6283376)]
- ➕ : add notie dependency for notifications [[c46d101](https://github.com/juwit/reveal-quiz/commit/c46d1018ff2b87cdd029a24426b19e49b0f65658)]
- ➕ : add ts-loader dependency to allow webpack to build Typescript files [[a882c60](https://github.com/juwit/reveal-quiz/commit/a882c60e31372cd8763c62cc988c315bb5bc84eb)]
- ➕ : add webpack dependency to build single js file [[fd71270](https://github.com/juwit/reveal-quiz/commit/fd712702f303124f65f108502e69bbd1efca355c)]
- ✨ : send last status when new client connects [[8e9c852](https://github.com/juwit/reveal-quiz/commit/8e9c852fbd805f5e533d57305ba209553e0f0e9e)]
- ✨ : save quiz status in a session [[426f5e0](https://github.com/juwit/reveal-quiz/commit/426f5e01c83696ac943a6cb6581e3cca5a3b9ccc)]
- ✨ : extract quiz class [[3e741ca](https://github.com/juwit/reveal-quiz/commit/3e741ca41ca1c9ad4ffb0d34bf667b801267e155)]
- ✨ : remote-control when responses are shown [[091966d](https://github.com/juwit/reveal-quiz/commit/091966d8ac58493e06e4dd69152743475147a3ed)]
- ✨ : show different view for trainer &amp; trainee [[54fde7f](https://github.com/juwit/reveal-quiz/commit/54fde7f3c3e6fc1c6e27ad58fea3998ab8408aed)]
- ✨ : add simple notifications for client [[0166763](https://github.com/juwit/reveal-quiz/commit/016676340dc910d8a53b62cc785479d67aed2185)]
- ✨ : add server for multiplex [[72c8136](https://github.com/juwit/reveal-quiz/commit/72c81360c3367dff91dc1851d56ba90cff155fb9)]
- ✨ : add first multiplex implementation [[518a790](https://github.com/juwit/reveal-quiz/commit/518a790cdc33b9d431793cbbb109c786e0bb7425)]
- ➕ : add socket.io dependency for multicast [[8e1290a](https://github.com/juwit/reveal-quiz/commit/8e1290af0a8c67a66704ad09a35f389515c3d541)]
- ✨ : use markdown for demo [[9a9ffeb](https://github.com/juwit/reveal-quiz/commit/9a9ffeb3e239189a02a63a265963ecdf32b820f2)]
- ✨ : use events for quizz answers and show responses [[c8894a4](https://github.com/juwit/reveal-quiz/commit/c8894a48173149ca03f1151ddf17574139745527)]
- ✨ : remove submit button on submission [[eb05cc9](https://github.com/juwit/reveal-quiz/commit/eb05cc98a488ea02eef87029eedfcfecb4e68bb4)]
- ✨ : show correct/incorrect responses on submission [[8571798](https://github.com/juwit/reveal-quiz/commit/8571798c64cb21b99aac8eb5e43a8915cfa9da72)]
- ✨ : lock answers on submit [[3d863aa](https://github.com/juwit/reveal-quiz/commit/3d863aa12adeed6813017eba59320bc03a5f558f)]
- ✨ : add a simple submit button [[ed2d4ca](https://github.com/juwit/reveal-quiz/commit/ed2d4ca49714a78c82b64644b33c787e5ef60f12)]
- ✨ : add basic rendering for questions &amp; answers [[9fe490b](https://github.com/juwit/reveal-quiz/commit/9fe490b009e9236337c93b74aef73828160baad9)]
- ✨ : add a second demo slide [[253e530](https://github.com/juwit/reveal-quiz/commit/253e530eaaaa13d057da8061f8a741afca8338f6)]
- ✨ : parse questions &amp; answers [[26d4d0d](https://github.com/juwit/reveal-quiz/commit/26d4d0d60a363fc6d21edb64cd505eb3da3de3f1)]
- ✨ : setup demo for tests [[090dfb2](https://github.com/juwit/reveal-quiz/commit/090dfb23f94449658dcd13f0a51f6215949cdc25)]
- ✨ : update quizz typescript skeleton [[176eba9](https://github.com/juwit/reveal-quiz/commit/176eba92c25be3a6ba8b415b49020b77305b3c77)]
- ✨ : initialize quizz plugin [[361c39f](https://github.com/juwit/reveal-quiz/commit/361c39fbe706b1a3bd977185f3a1f9faf10f8bc3)]
- ➕ : add typescript dependency [[c725bcd](https://github.com/juwit/reveal-quiz/commit/c725bcde18093abead3e04158a270bfc48110029)]
- 🎉 : initial commit [[0e96d5c](https://github.com/juwit/reveal-quiz/commit/0e96d5c887fe8f741ae80cb4b8d5e47be1f58bfc)]

### Changed

- 🔧 : configure webpack to use css-loader [[ceb0564](https://github.com/juwit/reveal-quiz/commit/ceb0564c312c4e6195325184b488709a0e167770)]
- 💄 : add basic timer styling [[e5360a2](https://github.com/juwit/reveal-quiz/commit/e5360a2e6a48ef442d425231c736943d8af201e1)]
- ♻️ : extract AbstractAnswerView [[cb855ee](https://github.com/juwit/reveal-quiz/commit/cb855eeffa5f0484365a151d68e648a4bea58236)]
- ♻️ : extract QuizView class [[c4837c6](https://github.com/juwit/reveal-quiz/commit/c4837c6ec741d56aed727afd9514a7664a11cfdd)]
- ♻️ : rename event questionAnswered to quiz-question-answered [[31cd8d5](https://github.com/juwit/reveal-quiz/commit/31cd8d5bec1467832566260d008312e50401c8ab)]
- ♻️ : rename showResponses event to quiz-show-responses [[0d6e9cf](https://github.com/juwit/reveal-quiz/commit/0d6e9cfc39a97d7f12ea765aa92891911c0cffeb)]
- ♻️ : extract notification service [[2772afa](https://github.com/juwit/reveal-quiz/commit/2772afaf82331d7009f5f31bcbfc98c69b62410c)]
- 🔧 : use webpack module for demo [[81857cb](https://github.com/juwit/reveal-quiz/commit/81857cbb4fa5e5871842c177b325c49c381aef95)]
- ♻️ : use imports without &#x27;.js&#x27; extension [[3e4e58b](https://github.com/juwit/reveal-quiz/commit/3e4e58b831744197b97f9cf753740fb240d8aebf)]
- 🔧 : configure webpack to build a single file module [[9bd30e7](https://github.com/juwit/reveal-quiz/commit/9bd30e76d1ef305e2615bb2e58c7786619a7ad1d)]
- 🔧 : remove main entry for package.json [[1871964](https://github.com/juwit/reveal-quiz/commit/187196411c9db16df8c73b84e9af6540bb4353e1)]
- 🎨 : use single quotes where applicable [[9b0c998](https://github.com/juwit/reveal-quiz/commit/9b0c99848d51e68e13162a6edd2e670b3bc0950d)]
- ♻️ : introduce role enum [[f8cdf8c](https://github.com/juwit/reveal-quiz/commit/f8cdf8c0636438f194bbf8c2747da6da6e823687)]
- 📌 : upgrade package-lock.json to version 2 [[4a11ce3](https://github.com/juwit/reveal-quiz/commit/4a11ce34fcc8ebc35119747e048f51785b62cbf7)]
- 🚚 : rename quizz.ts to plugin.ts [[6b051bd](https://github.com/juwit/reveal-quiz/commit/6b051bd993f39e43c944172fb7634623b2fc0abc)]
- 🚚 : extract views on their own file [[fee692d](https://github.com/juwit/reveal-quiz/commit/fee692d8d094182ffbe3c2725dc98421f6641761)]
- 🚚 : extract model objets to their own file [[681e577](https://github.com/juwit/reveal-quiz/commit/681e5771f5aa270cc2baea42c87ae9f4bd84cfec)]
- 🎨 : format code [[f6a55c7](https://github.com/juwit/reveal-quiz/commit/f6a55c7f0ead82c26bd7e6b8264cd59f5867cad1)]
- 🔧 : add DOM library to tsconfig [[cb078b1](https://github.com/juwit/reveal-quiz/commit/cb078b179e47c29ebda7819b9efe2a517c950499)]
- 💄 : add basic css for answers [[5338e10](https://github.com/juwit/reveal-quiz/commit/5338e10b8dc9b524045758658e152824e512bf23)]
- 🔧 : add watch script [[dfa61e6](https://github.com/juwit/reveal-quiz/commit/dfa61e6e52449755e09604e246d18b249c30006e)]
- 🔧 : extract tsconfig.json [[55b8976](https://github.com/juwit/reveal-quiz/commit/55b8976a0ffdbf65ad3ad6f4b237505c1d20480c)]
- 🔧 : configure typescript build [[9e35b31](https://github.com/juwit/reveal-quiz/commit/9e35b319794a3af62ebfc5f15458eb2bf4a93640)]

### Removed

- 🔥 : remove unused code [[5d3e09a](https://github.com/juwit/reveal-quiz/commit/5d3e09ae1939658e9b08df3d9f70b0f7caffb06f)]
- 🔥 : remove unused method ([e3648ab](https://github.com/juwit/reveal-quiz/commit/e3648ab6274001b9ec9fe90794d2c8027de66499))

### Fixed

- ✏️ : correct typo on method name [[f8902a0](https://github.com/juwit/reveal-quiz/commit/f8902a00f0fba327cd540fc1e0f52f54b86d7b22)]
- 🐛 : add missing prototypes to objects [[c3d2e43](https://github.com/juwit/reveal-quiz/commit/c3d2e433cc3d9d43c0acdeba1870ed28faf71704)]
- ✏️ : add missing point [[eaf2ccd](https://github.com/juwit/reveal-quiz/commit/eaf2ccd4ab72422d3345e15f5ece56c3b57a50b0)]
- 🐛 : correct answer regex [[594333e](https://github.com/juwit/reveal-quiz/commit/594333e99ff284745f376556657fd59ca8700ffe)]

### Miscellaneous

- 🤡 : quizz -&gt; quiz [[58f421d](https://github.com/juwit/reveal-quiz/commit/58f421db9515ad2c25280326cceed4508b0b6b3d)]
- 💩 : compute answers states on click [[e6e7f81](https://github.com/juwit/reveal-quiz/commit/e6e7f81b5dffe5ed05cc76dddd4def2931e78d5e)]
- 🙈 : gitignore .idea/ &amp; dist/ [[527b129](https://github.com/juwit/reveal-quiz/commit/527b12903e8287bfe66276453a58436a7d90b345)]

