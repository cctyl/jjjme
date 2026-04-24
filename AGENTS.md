# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-24
**Branch:** main

## OVERVIEW
J2ME emulator (KEmulator) binary distribution with API libraries and multilingual UI localization. Not a source-code project.

## STRUCTURE
```
./
├── kemnnmod/          # Emulator binaries + API JARs + native DLLs
│   ├── uei/          # JSR API library JARs (29 libraries)
│   └── lang/         # UI localization files (8 languages, KEY=Value format)
├── j2me-project/     # Empty J2ME project template (intended for user code)
├── node_modules/     # oh-my-opencode-linux-x64 (OpenCode tooling)
├── package.json      # Minimal (dependencies only, no scripts)
├── opencode.json     # MCP server config (context7 + jadx decompiler)
└── README.md         # Chinese project documentation
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Emulator binaries | `kemnnmod/` | KEmulator.jar + .exe + native DLLs (Windows/Linux) |
| J2ME API libraries | `kemnnmod/uei/` | 29 vendor JARs (Nokia, Samsung, Sony Ericsson, etc.) |
| Localization strings | `kemnnmod/lang/*.txt` | 8 languages: en, es, pt-BR, ru, uk, zh-CN, zh-TW |
| Vendor SDK origins | `kemnnmod/uei/readme.txt` | Credits: Nokia Asha SDK, Symbian^3, proprietary kemulator libs |
| Unsupported JSRs | `kemnnmod/uei/readme.txt` | jsr75_pim, jsr226, jsr234, nokia_ui1.6, jsr211, filemanagerapi |

## CODE MAP
| Symbol/Asset | Type | Location | Role |
|--------------|------|----------|------|
| KEmulator.jar | Java archive | `kemnnmod/KEmulator.jar` | Core emulator runtime |
| KEmulator.exe | Native executable | `kemnnmod/KEmulator.exe` | Windows launcher |
| midp21.jar | API library | `kemnnmod/uei/midp21.jar` | MIDP 2.1 core (CLDC 1.1) |
| jsr184.jar | API library | `kemnnmod/uei/jsr184.jar` | M3G (Mobile 3D Graphics) |
| jsr82.jar | API library | `kemnnmod/uei/jsr82.jar` | Bluetooth API |
| lang/en.txt | Localization | `kemnnmod/lang/en.txt` | English UI strings |
| lang/zh-CN.txt | Localization | `kemnnmod/lang/zh-CN.txt` | Simplified Chinese UI strings |

## CONVENTIONS
- **Localization format**: `KEY=Value` per line, comments start with `#`. Semicolons and equals signs used for alignment (e.g., `MENU_MIDLET = 文件`).
- **Binary distribution**: Prebuilt assets committed to VCS (JARs, DLLs, EXEs). No build step for these.
- **No source code**: No `.java`, `.py`, `.ts`, `.js` files in repo. Everything is binary or documentation.
- **Package management**: Minimal `package.json` with only `oh-my-opencode-linux-x64` dependency; `node_modules/` committed (unusual for Node projects).

## ANTI-PATTERNS (THIS PROJECT)
- **No build system**: No `Makefile`, `Dockerfile`, or CI workflows. Manual download/binary distribution only.
- **Missing template files**: `j2me-project/` is empty despite README documenting `build.sh`, `MANIFEST.MF`, `src/`.
- **Committed node_modules**: VCS includes `node_modules/` (violates Node.js conventions).
- **No test infrastructure**: No test configs, no test directories.

## UNIQUE STYLES
- **Monolithic binary repo**: Mix of Java ME emulator (JAR), Windows native binaries (DLL/EXE), and Node.js tooling in a single distribution.
- **Vendor-aggregate approach**: Bundles JSR APIs from multiple SDKs (Nokia Asha, Symbian^3, Samsung) under `uei/`.
- **Multi-lingual out-of-box**: 8 localization files shipped with emulator (unusual for emulator distros).
- **Incomplete template**: `j2me-project/` referenced in README but not materialized in checkout.

## COMMANDS
```bash
# Development (Node tooling - limited)
npm --prefix /home/tyl/prj/jjjme help  # package.json has no scripts

# Inspect JAR contents (requires JDK)
jar tf kemnnmod/KEmulator.jar | head

# Browse localization
cat kemnnmod/lang/zh-CN.txt | head -40

# Check vendor origins
cat kemnnmod/uei/readme.txt
```

## NOTES
- **No Python/TS/JS source**: Standard lint/test configs (ESLint, pytest, tsconfig) don't apply.
- **Binary-only**: Code navigation/debugging requires decompilation (jadx MCP server configured in opencode.json).
- **Repository state**: Uncommitted changes exist (node_modules/, package.json, package-lock.json added; qq2008.jar removed). The working tree may be a transitional state.
- **Entry point**: For J2ME apps, users should copy `j2me-project/` template (currently empty) and run their own `build.sh` (missing). The emulator itself (`KEmulator.jar`) is a runtime, not a build tool.
