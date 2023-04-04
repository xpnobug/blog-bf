(function (a) {
  a.fn.wpSuperSnow = function (g) {
    var q, h, r, b, s, n, f, t, m, l = a("head"), o = a("body"), p, u, d,
        k = {flakes: [], totalFlakes: 50, zIndex: 999999, maxSize: 50, maxDuration: 25, useFlakeTrans: false},
        c = ["wpSuperSnowFlake_l", "wpSuperSnowFlake_r"], j = ["wpSuperSnow_l", "wpSuperSnow_r"];
    g = a.extend({}, k, g);
    if (!g.flakes.length) {
      return this
    }
    if (a.wpSuperSnowCSS) {
      l.append('<style type="text/css">' + a.wpSuperSnowCSS + "</style>"), a.wpSuperSnowCSS = ""
    }
    var e = function (v, i) {
      v = (typeof v === "number") ? v : 0;
      i = (typeof i === "number") ? i : Number.MAX_VALUE;
      return Math.floor(Math.random() * (i - v + 1)) + v
    };
    return this.each(function () {
      p = a(this), u = "fixed";
      if (a.inArray(p[0].nodeName.toLowerCase(), ["html", "body"]) === -1) {
        p.css({position: "relative", overflow: "hidden"}), u = "absolute"
      }
      d = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
      for (p = a(this), q = 1; q <= Number(g.totalFlakes); q++) {
        h = e(0, 100);
        r = e(1, 9);
        n = e(1, Number(g.maxSize));
        b = e(Math.floor(Number(g.maxDuration) / 5), Number(g.maxDuration));
        s = (d.length) ? d.shift() : e(0, Math.floor(b / 5));
        t = g.flakes[e(0, g.flakes.length - 1)];
        f = (t.indexOf("flake") !== -1) ? c[e(0, c.length - 1)] : j[e(0, j.length - 1)];
        m = a('<div class="wp-super-snow-flake"><img src="' + t + '" /></div>');
        m.css({
          width: n + "px",
          height: n + "px",
          position: u,
          "z-index": Number(g.zIndex),
          left: h + "%",
          top: "-200px",
          opacity: "0",
          "user-select": "none",
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "backface-visibility": "visible",
          "-webkit-backface-visibility": "visible",
          "-moz-backface-visibility": "visible",
          "-ms-backface-visibility": "visible",
          animation: f + " " + b + "s infinite",
          "animation-delay": s + "s",
          "-webkit-animation": f + " " + b + "s infinite",
          "-webkit-animation-delay": s + "s",
          "-moz-animation": f + " " + b + "s infinite",
          "-moz-animation-delay": s + "s",
          "-ms-animation": f + " " + b + "s infinite",
          "-ms-animation-delay": s + "s"
        }), a("img", m).css({width: "100%", height: "auto", border: 0, opacity: (g.useFlakeTrans) ? "." + r : 1});
        p.append(m)
      }
    })
  };
  a.wpSuperSnowCSS = "@keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(500px,1500px,0) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-webkit-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-webkit-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-moz-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-moz-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-ms-keyframes wpSuperSnow_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(500px,1500px,0) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-ms-keyframes wpSuperSnow_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(-500px,1500px,0) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-webkit-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-webkit-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -webkit-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-moz-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-moz-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -moz-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}";
  a.wpSuperSnowCSS += "@-ms-keyframes wpSuperSnowFlake_l {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(500px,1500px,0) rotateY(720deg) rotate(250deg);}}";
  a.wpSuperSnowCSS += "@-ms-keyframes wpSuperSnowFlake_r {0% {opacity:0;} 25% {opacity:1;} 100% {opacity:0; -ms-transform:translate3D(-500px,1500px,0) rotateY(-720deg) rotate(-500deg);}}"
})(jQuery);