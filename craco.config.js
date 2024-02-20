module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Находим правило, которое использует source-map-loader
            const rule = webpackConfig.module.rules.find(r =>
                r.oneOf && r.oneOf.find(one => one.loader && one.loader.includes('source-map-loader'))
            );

            if (rule) {
                // Изменяем каждое правило в oneOf, чтобы исключить node_modules полностью
                rule.oneOf.forEach(oneOfRule => {
                    if (oneOfRule.loader && oneOfRule.loader.includes('source-map-loader')) {
                        // Исключаем все файлы из node_modules
                        oneOfRule.exclude = [/node_modules/];
                    }
                });
            }

            return webpackConfig;
        },
    },
};

