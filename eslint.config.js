const js = require('@eslint/js');

module.exports = [
    // Reglas para la verificación del código
    // Reglas base de ESLint (JavaScript)
    js.configs.recommended, {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname:'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn'
        }
    },
    // Configuración adicional (SOlo aplica a los archivos de test)
    {
        files: ['tests/**/*.js'],
        languageOptions: {
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    // Configuración adicional (SOlo aplica a los archivos de test)
    {
        files: ['tests/**/*.js'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly'
            }
        }
    },
    // Exclusiones globales (Carpetas o archivos que ESlint no debe verificar)
    {
        ignores: ['node_modules/','logs/']
    }
    
];