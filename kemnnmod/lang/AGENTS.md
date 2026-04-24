AGENTS REPORT: kemnnmod/lang localization set

OVERVIEW
- Distinct i18n domain for KEmulator UI. 8 language files in this directory.
- Full content of all eight files is stored in their respective files; this AGENTS.md provides a concise map due to length.

STRUCTURE
- en.txt (420 lines), es.txt (416), pt-BR.txt (421), ru.txt (421), uk.txt (312), zh-CN.txt (398), zh-TW.txt (415)
- File names follow language-country conventions; each is KEY=Value pairs with MENU_ VIEW_ and TOOL_ prefixes.

WHERE TO LOOK
- kemnnmod/lang/*.txt contains all translations.
- zh-CN.txt uses alignment spaces around = for readability; other files use standard KEY=Value.

CONVENTIONS
- Keys: MENU_*, VIEW_*, TOOL_ with direct substitutions; no interpolation or plural forms.
- Blank lines separate sections; comments begin with # in each file.
- Chinese versions preserve alignment spacing for readability; ensure consistent switches across locales.

ANTI-PATTERNS
- Do not introduce new keys in this directory without coordinating mappings.
- Avoid changing key prefixes; preserve MENU_/VIEW_/TOOL_ alone.
- Do not embed variables or format specifiers beyond plain substitution.

UNIQUE STYLES
- zh-CN.txt and zh-TW.txt include alignment spaces for readability.
- Eight locales tailor the same UI to language-specific conventions.
