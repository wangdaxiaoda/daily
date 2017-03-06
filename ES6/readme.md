Babel：
安装babel：npm install -g babel-cli
转换成es2015所需：npm install -save babel-preset-es2015
转换成es2015的命令：  babel es6.js  babel es6.js -o es5.js
运行es6的命令：	babel-node es6.js    在当前目录下建文件.babelrc（内容：{"presets":['es2015']}）
浏览器中运行： 
			1. npm install babel-core@5;
			2.然后找到brower.js  <script type="text/babel">···</script>

			！！babel配合browserify一起使用，可以生成浏览器直接加载的脚本
			1.安装babelify模块  npm install -save-dev babelify babel-preset-2015
			2.转换es6，browserify script.js -o bundle.js \ -t [babelify --presets[es2015 react]]


Traceur:
安装：npm install -g traceur
es6转es5:traceur --script calc.es6.js --out cacl.es5.js --experimental(--experimental是为了防止某些特性编译不成功)
