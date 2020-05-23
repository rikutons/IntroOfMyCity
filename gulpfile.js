// gulpプラグインの読み込み
const {task, watch, src, dest} = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

const compileSass = () => {
    // title.sassファイルを取得
    return (
        src("title/title.sass")
        // Sassのコンパイルを実行
        .pipe(sass({
            outputStyle: "expanded"
        })
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(dest("title"))
    );
}

const watchSassFiles = () => watch("title/title.sass", compileSass);

exports.default = watchSassFiles;