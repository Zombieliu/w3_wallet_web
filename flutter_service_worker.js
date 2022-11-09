'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01de1aa21828b2bf26b2d10fcd37b407",
"index.html": "23bafc641596a7566154641cb0db535e",
"/": "23bafc641596a7566154641cb0db535e",
"main.dart.js": "1e232f404bb2574f640c34efe45c7961",
"favicon.png": "d7c18606bc40cc6716b5bb96741a02df",
"icons/Icon-192.png": "dfb7ef9990ec1dea6022c810400d52c2",
"icons/Icon-maskable-192.png": "dfb7ef9990ec1dea6022c810400d52c2",
"icons/Icon-maskable-512.png": "b067fb09259add89e3a9e1db6dc6786e",
"icons/Icon-512.png": "b067fb09259add89e3a9e1db6dc6786e",
"manifest.json": "757d323f7a4d956e3825a42d42d06d7d",
"assets/AssetManifest.json": "8878c3be228b328eaf843ae6855461f6",
"assets/NOTICES": "e06ee8e45d2e4a8ab42b32f2c2e9c24b",
"assets/FontManifest.json": "3869441294fb6c6f4af280ff566ccef2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/bruno/assets/images/icon_share_zone_disable.png": "2c5952d22b107c50f1e420e80c1cf549",
"assets/packages/bruno/assets/images/icon_arrow_up_selected.png": "05663a9913ee909e37f400eb84e9bab7",
"assets/packages/bruno/assets/images/icon_appraise_bad_selected.gif": "4872c821ba3b572004f941219656f927",
"assets/packages/bruno/assets/images/icon_more.png": "4e2d9f1ebe88bee022f89482ca4a0d34",
"assets/packages/bruno/assets/images/multi_select_btn_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/multi_select_btn_grey.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_star_size_selected.png": "d4391b3510c4d8f9e1331f8bb982367c",
"assets/packages/bruno/assets/images/icon_share_weChat.png": "c754f1d3aa4c27818c8f6ca80ad18254",
"assets/packages/bruno/assets/images/icon_share_wechat_disable.png": "05a5edf43878dfc59c925e540227321c",
"assets/packages/bruno/assets/images/icon_share_weibo.png": "1a03f06dc4e5b70ea2ba14dae7150f79",
"assets/packages/bruno/assets/images/network_error.png": "de30b8038a7fd8f543014ef7a27490e9",
"assets/packages/bruno/assets/images/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/images/icon_appraise_not_good_selected.gif": "d48c1ea3c907c5a4a46f2b484c1f3ae8",
"assets/packages/bruno/assets/images/img_step_title.png": "7baf56af65f5089205c05d9ef64ffe64",
"assets/packages/bruno/assets/images/icon_qrcode_failed.png": "d6e0bcb4ea8bb988a6fbd6554969a637",
"assets/packages/bruno/assets/images/icon_call_disable.png": "6fccb80d93cd9736558244e561dc3e09",
"assets/packages/bruno/assets/images/icon_refresh.png": "42d6492e745925d98af3b8ad42aac964",
"assets/packages/bruno/assets/images/icon_appraise_bad_unselected.png": "dc92c8bac4b471958ebd31b4e6665bb9",
"assets/packages/bruno/assets/images/img_unselected.png": "c34a63171059ea804d827dde75aad5fd",
"assets/packages/bruno/assets/images/icon_arrow_down_selected.png": "e7689a2bd3cecd5b8a8014251207427c",
"assets/packages/bruno/assets/images/icon_appraise_good_default.png": "0ba6515b918a139ddb87abd51490479e",
"assets/packages/bruno/assets/images/icon_share_save_image_disable.png": "8c3aedfd91f07816a75826036f6c0fa5",
"assets/packages/bruno/assets/images/icon_custom_share.png": "cf4fae2c0040e5b52b3732258480abb0",
"assets/packages/bruno/assets/images/two_line_bubble.png": "6a50dd5e33f3e3083d752f1138a03ae2",
"assets/packages/bruno/assets/images/icon_share_message_disable.png": "15a552749a4e5f7472e5686c6844f535",
"assets/packages/bruno/assets/images/icon_share_shareLink.png": "cf509f991da85af1159683d038d516e6",
"assets/packages/bruno/assets/images/empty_state.png": "6e96121087d0308ede162b11d26d0f82",
"assets/packages/bruno/assets/images/icon_multi_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/icon_arrow_down_unselected.png": "4ae009dcb0a9f37162cec27f804e5e90",
"assets/packages/bruno/assets/images/refresh_arrow_up.png": "06f0e8007d46db4355a186834352bc4d",
"assets/packages/bruno/assets/images/icon_im_blue.png": "fb2c916280bb0e2948129a279c8e9624",
"assets/packages/bruno/assets/images/icon_call.png": "0f8ec4efe41b0c61920869e87934cf21",
"assets/packages/bruno/assets/images/icon_share_moments.png": "2c6ca38609aa5748a5b450ca7a215577",
"assets/packages/bruno/assets/images/icon_star_size.png": "d27325d6cbfd2efa79a248d530fc6f26",
"assets/packages/bruno/assets/images/icon_share_browser_disable.png": "49ea2adab5e8c9ff6ad2f3bb7f0dd389",
"assets/packages/bruno/assets/images/icon_appraise_surprise_selected.gif": "dc449f267bceeb855eb55b288a3639b1",
"assets/packages/bruno/assets/images/icon_appraise_ok_unselected.png": "fc6373e1af9bf8ffb3c4b8c3400e48ad",
"assets/packages/bruno/assets/images/select_checked_status.png": "7b8079e5fa987209967ece5907ea4b25",
"assets/packages/bruno/assets/images/icon_share_qq.png": "0350a2534f77b75b98f9c15e3159c3ad",
"assets/packages/bruno/assets/images/img_network.png": "d167c2173c796824a9504dcea0cfeda6",
"assets/packages/bruno/assets/images/icon_appraise_good_selected.gif": "d9ab487859bfb6a19a2427b82bf1a263",
"assets/packages/bruno/assets/images/icon_share_zone.png": "19599a32fa9101c73048cee724265a69",
"assets/packages/bruno/assets/images/icon_appraise_surprise_unselected.png": "10c0f57c8f1a2046205e4a248d842f3a",
"assets/packages/bruno/assets/images/icon_im.png": "557b28ee7422dc8873227200b8301ca9",
"assets/packages/bruno/assets/images/icon_qrcode_bg.png": "58532720f3445299f09ff70a6917a0cc",
"assets/packages/bruno/assets/images/icon_share_copy.png": "95840c782c0f9269a5b8729e1fa8153f",
"assets/packages/bruno/assets/images/icon_refresh_white.png": "30b15e71573234d94e74fce849c24bb3",
"assets/packages/bruno/assets/images/icon_bottom_picker_right_top_bg.png": "7c53021ff2f4cea0088a5c2cb1dc2e42",
"assets/packages/bruno/assets/images/refresh_arrow_down.png": "fbba93502902aa07f6ef0b390ce4645d",
"assets/packages/bruno/assets/images/icon_appraise_not_good_unselected.png": "053bd691d3d446b072ef3dc1e1c54216",
"assets/packages/bruno/assets/images/icon_appraise_good_unselected.png": "c85ef408d0e975a3d75c691f3b0dbb77",
"assets/packages/bruno/assets/images/icon_share_save_image.png": "95ddc85d949f0ec24cb47a6887ed03f2",
"assets/packages/bruno/assets/images/icon_guanbi.png": "47d96168715e105ccc9375dd3563c7b9",
"assets/packages/bruno/assets/images/img_bg_blur.png": "af00b199cb0f5ffef5534b6e0820bf1a",
"assets/packages/bruno/assets/images/icon_unselect.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_share_moments_disable.png": "bdc02036f8ce03714468c70d49c83a2a",
"assets/packages/bruno/assets/images/icon_share_qq_disable.png": "8011a5fc6c34dfe555b5eb455d9fe4d6",
"assets/packages/bruno/assets/images/icon_share_shareLink_disable.png": "9cf769fd5f0cd8ef64b57d3d247e7511",
"assets/packages/bruno/assets/images/icon_share_message.png": "85f79bd5b5f2a5f5b4ac07f90bd8a1a7",
"assets/packages/bruno/assets/images/icon_appraise_surprise_default.png": "edb11f9f5ef607affc1d09c99eeff40e",
"assets/packages/bruno/assets/images/icon_share_copy_disable.png": "8b9408488dfe702510bfe31ec3d72303",
"assets/packages/bruno/assets/images/icon_appraise_bad_default.png": "5f225ab0e6aa5f4ddc6219fe62bba83f",
"assets/packages/bruno/assets/images/icon_share_browser.png": "5eff40cd995513e061aafdcef44fcfa9",
"assets/packages/bruno/assets/images/icon_share_weibo_disable.png": "b4e67d4a69c659b86cdea91f3641783d",
"assets/packages/bruno/assets/images/no_data.png": "28ebfceb62c9d49f284b9bf75148c3d4",
"assets/packages/bruno/assets/images/icon_appraise_ok_selected.gif": "f360d504d464729850fd6daafa8ca224",
"assets/packages/bruno/assets/images/icon_appraise_not_good_default.png": "928cee02f4b974ecded8221eda0b00aa",
"assets/packages/bruno/assets/images/img_bg_card.png": "a34f70556b8e474c60e114ee1f410507",
"assets/packages/bruno/assets/images/icon_single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/images/icon_appraise_ok_default.png": "f73afb9b00646474d42706ca84ac121d",
"assets/packages/bruno/assets/images/content_failed.png": "73d29e8b8616c64c0ccfb5880c98b507",
"assets/packages/bruno/assets/images/img_selecetd_default.png": "8af280beb2675b865cf355617f2226fb",
"assets/packages/bruno/assets/json/china.json": "981508d9619356a8deca0aa642792c51",
"assets/packages/bruno/assets/icons/icon_success.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/ic_delete_white.png": "6eab4791d9fa0c2728010017a68512c6",
"assets/packages/bruno/assets/icons/icon_remove_form_item.png": "9a88462a461975d461bb197af5a6ecd3",
"assets/packages/bruno/assets/icons/icon_notice_warning.png": "2fe3ddae808c90596d04a578a48c4011",
"assets/packages/bruno/assets/icons/icon_down_arrow.png": "2c15b9ff209677b7c53529976c942768",
"assets/packages/bruno/assets/icons/icon_step_5.png": "8a8e83032bf482ba223871ddf2630e83",
"assets/packages/bruno/assets/icons/icon_close.png": "762942ed622fe635bb59466b11e4561b",
"assets/packages/bruno/assets/icons/icon_notice_arrow_red.png": "137d23f3e3da680d036a59af62c79ab3",
"assets/packages/bruno/assets/icons/icon_result_error.png": "81f26e7d7490a9c6ea5d3e42e1eb4047",
"assets/packages/bruno/assets/icons/icon_star.png": "e1e54bf4c8d9056b3ee517141031ad31",
"assets/packages/bruno/assets/icons/icon_step_4.png": "8fadaffee25637ddbe8b70062bc650e4",
"assets/packages/bruno/assets/icons/icon_vr.png": "94c803a5c76c8256ef67e41cb7e9ceb5",
"assets/packages/bruno/assets/icons/radio/single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/icons/radio/disable_unselected.png": "5f196cbb452b315b25613063da054fbb",
"assets/packages/bruno/assets/icons/radio/disable_single_selected.png": "3aa5d5b7b39dc807a9a1d8b8f9acf3d5",
"assets/packages/bruno/assets/icons/radio/disable_multi_selected.png": "174498c62562e984225f7bf861680acd",
"assets/packages/bruno/assets/icons/radio/unselected.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/icons/radio/multiple_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/icons/icon_question.png": "9fd6f5871e8cc9f40894c361624deb40",
"assets/packages/bruno/assets/icons/icon_popup_close.png": "df80090a6d5835e479fee3b3b38778e9",
"assets/packages/bruno/assets/icons/icon_step_3.png": "7c5ea8faa747e4ee9b8998b28965711d",
"assets/packages/bruno/assets/icons/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/icons/icon_right_top_pointer.png": "708848d9a623023b92924c8f3d47d18e",
"assets/packages/bruno/assets/icons/icon_calendar_next_month.png": "b9c84144c187081ece2f336c526b009b",
"assets/packages/bruno/assets/icons/icon_step_2.png": "a3f473ee8f55c3e392294f44246ebec1",
"assets/packages/bruno/assets/icons/icon_trash.png": "db5c83b8bbe9ab076ee933d04b388334",
"assets/packages/bruno/assets/icons/icon_operation_line_left.png": "0ccda5dc91a237ef2d16504bb0569164",
"assets/packages/bruno/assets/icons/icon_notice_close_red.png": "e7b7deafe27c9eac751077f4bd86ec02",
"assets/packages/bruno/assets/icons/icon_triangle_up.png": "d4e3cd2db15e82e38c4e54da72247e49",
"assets/packages/bruno/assets/icons/icon_notice_close_green.png": "a27ab4db280eef98da5d199bde69aaf3",
"assets/packages/bruno/assets/icons/icon_notice_arrow_green.png": "3d956dce88dc751d75e2244196c89056",
"assets/packages/bruno/assets/icons/icon_bottom_btn.png": "702c79f6d0ca30a4990098bf3dc47538",
"assets/packages/bruno/assets/icons/grey_place_holder.png": "3ba32cbe47304f47ccc6b4aae9b757d5",
"assets/packages/bruno/assets/icons/icon_back_black.png": "cca96aa19663a5b81287305b221d717d",
"assets/packages/bruno/assets/icons/icon_add_form_item.png": "c213aec673e820a28db9356cfbdfabc9",
"assets/packages/bruno/assets/icons/icon_notice_succeed.png": "a46a9cda13903c86e156699c77779dd9",
"assets/packages/bruno/assets/icons/icon_minus_disable.png": "4cd4a2b9845f39958eb0c38fd1c224ef",
"assets/packages/bruno/assets/icons/icon_notice_arrow_orange.png": "8fd4c45816256c6b2e379d017dece60a",
"assets/packages/bruno/assets/icons/icon_calendar_pre_month.png": "2717508568bee63c78ea0c264e64cdba",
"assets/packages/bruno/assets/icons/icon_notice.png": "c586ee43118838efedfa3248a50a09b0",
"assets/packages/bruno/assets/icons/icon_step_doing.png": "052416a16da085ed675d56fe04f3ad3d",
"assets/packages/bruno/assets/icons/icon_audioplayer_play.png": "30e5d166c3c20d81219f68a84b30c798",
"assets/packages/bruno/assets/icons/icon_alter.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/icon_notice_close_blue.png": "c3ab1f9255f0fb302ca4918c0c64ab2a",
"assets/packages/bruno/assets/icons/icon_notice_fail.png": "c08cf38e0d6e093ca038de14d3b315fe",
"assets/packages/bruno/assets/icons/icon_pait_info_question.png": "c64b57553cae77b1152db3af431f1314",
"assets/packages/bruno/assets/icons/icon_require_red.png": "6c4a317ffbb7a17b69b3b226125e45e9",
"assets/packages/bruno/assets/icons/img_avatar_new.png": "0ffd52e7313c6dff8e3c89103b5858d0",
"assets/packages/bruno/assets/icons/normol_border.png": "085a0baefd58ffae2df2fd7ac910c64f",
"assets/packages/bruno/assets/icons/icon_add_disable.png": "027458e6fea11520a721a91bdb298884",
"assets/packages/bruno/assets/icons/ic_quotation_mark.png": "914d9400917d6228cfb69f138d1408cb",
"assets/packages/bruno/assets/icons/icon_unselected_triangle.png": "bd80c3d1eee62cbcf6dbdbc78492a8ad",
"assets/packages/bruno/assets/icons/ic_search.png": "73c7edd0a5b03093c160444cccf88542",
"assets/packages/bruno/assets/icons/icon_right_arrow.png": "87c35e448cf021b149a63f8e372f129c",
"assets/packages/bruno/assets/icons/icon_notice_close_orange.png": "375d658030ca161fcbd584a835cfb2db",
"assets/packages/bruno/assets/icons/icon_audioplayer_pause.png": "b90ac71697048651faa68a80a1b4153b",
"assets/packages/bruno/assets/icons/icon_warning.png": "c2234221b2383fd79589fc092b6ca01a",
"assets/packages/bruno/assets/icons/icon_operation_line_right.png": "3e6a6b76d9add9a7fe74b47fbcdd5ed5",
"assets/packages/bruno/assets/icons/icon_alert.png": "b862b889851253cff6fb8232bb005a6c",
"assets/packages/bruno/assets/icons/icon_result_success.png": "f4ee826d90a9b7a70d171a056f830ab8",
"assets/packages/bruno/assets/icons/icon_step_completed.png": "070166a539a87d7435bf5e41a5736a95",
"assets/packages/bruno/assets/icons/icon_notice_running.png": "0e220fad891161234dfa731d1baffc93",
"assets/packages/bruno/assets/icons/icon_notice_arrow_blue.png": "3665442af614981c25f03fa866e0bea6",
"assets/packages/bruno/assets/icons/icon_star_select.png": "9e81914b1d3165b0c2035da112e50191",
"assets/packages/bruno/assets/icons/icon_back_white.png": "c9e16d8495466af8cab275700e7dc663",
"assets/packages/bruno/assets/icons/icon_up_arrow.png": "759e41c12aee3ac9dba6f152b9b542ca",
"assets/packages/bruno/assets/icons/icon_add_enable.png": "7c54dd9ae8bd4ad34fdbe9ec9676a607",
"assets/packages/bruno/assets/icons/icon_star_unselect.png": "1eb3492bf235dd2e59872b749baf083d",
"assets/packages/bruno/assets/icons/icon_minus_enable.png": "80ead638d7a2ad2252debf08f26b0831",
"assets/packages/bruno/assets/icons/icon_selcted_triangle.png": "d4e3cd2db15e82e38c4e54da72247e49",
"assets/packages/bruno/assets/icons/icon_house_grey.png": "b5ca805d528b9fd83346d06b3bfcc915",
"assets/packages/bruno/assets/icons/icon_delete.png": "677eebfbf89ccd7895363bd88d90b9ea",
"assets/packages/bruno/assets/icons/ic_delete_grey.png": "ab70d1844f58c85c5dda3c0af9e5f163",
"assets/packages/bruno/assets/icons/icon_star_half.png": "db4a2f866101a2854c4d33dfdecc6128",
"assets/packages/bruno/assets/icons/icon_triangle_down.png": "bd80c3d1eee62cbcf6dbdbc78492a8ad",
"assets/packages/bruno/assets/fonts/Bebas-Regular.ttf": "6f6f82d9243d8111301f39648fb1d62b",
"assets/shaders/ink_sparkle.frag": "aa6e10065078c7491ed7c61bd2f49c53",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/bitcoin.png": "20771f02e818013257a59dc057554922",
"assets/assets/images/APT.png": "ecc364923a3539d71d29af4814dd0d95",
"assets/assets/images/bnb.png": "c09377c02e5470b5009011c32b9f40c8",
"assets/assets/images/web3games.png": "0df2704a1b4af9ae04f92fd352789fa3",
"assets/assets/images/ETH.png": "ec43b0119407401e3649d3418b424bf9",
"assets/assets/images/icon-1024x1024.png": "98c3dc2572835c82864554ae263fe4c1",
"assets/assets/images/USDT.png": "41d9f44a01343949a1fb14186e7062fe",
"assets/assets/images/logo.png": "f4e93a30044b0b4d9442587b7b23a858",
"assets/assets/images/aave.png": "130f153258a4d9dab8d53a26dd29bae3",
"assets/assets/images/W3G.png": "0df2704a1b4af9ae04f92fd352789fa3",
"assets/assets/images/polkadot.png": "2b6637c88789f80b009bbb6d84fa4a8d",
"assets/assets/images/success.png": "95bd89d537b3fdc1345d157b6d2b89e0",
"assets/assets/images/GST.png": "d0e814fa7f145eef27df8390bebd5528",
"assets/assets/images/page1.png": "7d5d6ce7f935b6872d2ead5157366704",
"assets/assets/images/testimg.png": "5dfeaad7b6e70d9d2fdb5b644c1c1174",
"assets/assets/images/page3.png": "5a703659a1e8003c8b6d30ba758e9915",
"assets/assets/images/page2.png": "241cffc2860174f5ef63cb2e0cdde8af",
".idea/workspace.xml": "466027e6bfce7aea4886ae193c714523"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
