(function () {
  var root = document.documentElement;
  var KEY = "niu-lang";
  var btn = document.getElementById("langBtn");

  var titles = {
    "zh-CN": ["牛币钱包 NIU Wallet · 牛链桌面钱包、安卓钱包与独立链源码",
      "牛链（NIU）钱包：Windows x64、macOS Apple Silicon 桌面版与安卓手机版接入同一条网络。Ethash PoW + London EVM 独立链，源码以 GPL-3.0 开放。当前版本未经独立第三方安全审计。"],
    "en": ["NIU Wallet · Desktop and Android wallet plus standalone chain source for the NIU network",
      "NIU wallets for Windows x64, macOS Apple Silicon and Android on one network. Standalone Ethash PoW + London EVM chain, source open under GPL-3.0. Not independently audited."]
  };

  function apply(lang) {
    root.lang = lang;
    btn.textContent = lang === "en" ? "中文" : "EN";
    document.title = titles[lang][0];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", titles[lang][1]);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === "en" ? "en" : "zh-CN");

  btn.addEventListener("click", function () {
    apply(root.lang === "en" ? "zh-CN" : "en");
  });

  Array.prototype.forEach.call(document.querySelectorAll(".copy"), function (el) {
    var full = el.getAttribute("data-copy");
    var short = el.textContent;
    el.setAttribute("title", full);
    el.setAttribute("aria-label", "Copy " + full);
    el.addEventListener("click", function () {
      var done = function () {
        el.textContent = "✓ Copied";
        el.classList.add("is-done");
        setTimeout(function () {
          el.textContent = short;
          el.classList.remove("is-done");
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(done, function () { fallback(full, done); });
      } else {
        fallback(full, done);
      }
    });
  });

  function fallback(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;left:-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
