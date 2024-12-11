import generate from './generate.mjs';

const OUTPUT_PATH = '../files';

generate({
    tokenPath: ['../tokens/dark.theme.tokens.json'],
    templatePath: '../templates/css.variables.ejs',
    outputPath: OUTPUT_PATH,
    extname: 'css',
    baseToken: '../tokens/base.tokens.json',
});
