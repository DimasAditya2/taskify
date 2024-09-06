import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.node,
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-require-imports': 'off', // Nonaktifkan aturan ini jika Anda perlu menggunakan require
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'require-yield': 'off',
      // ! tidak direkomendasikan karena bisa menyebabkan pengabaian terkait variabel yang tidak terdefinisi
      // ! sementara untuk menghilangkan error di unit testing jest
      "no-undef": "off" ,
      "no-sparse-arrays": "off"
    }
  }
]
