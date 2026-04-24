# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-24
**Branch:** main

## OVERVIEW
kemnnmod/ contains the J2ME emulator runtime binaries and native dependencies for KEmulator. Binary-only distribution; no source code.

## STRUCTURE
```
kemnnmod/
├── KEmulator.jar        # Core emulator (10MB)
├── KEmulator.exe        # Windows launcher
├── *.dll                # Native Windows libraries
│   ├── amrdecoder.dll
│   ├── jinput-dx8.dll
│   ├── micro3d_v3_32.dll
│   ├── jsr184client.dll
│   └── ma3smwemu.dll
├── uei/                 # JSR API JARs (29 libraries)
├── lang/                # UI localization files (8 languages)
├── sensorsimulator.jar  # Sensor simulation
├── m3g_swerve.jar       # M3G engine alternative
└── m3g_lwjgl.jar        # M3G LWJGL engine
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Emulator core | `KEmulator.jar` | Main runtime (~10MB) |
| Windows launcher | `KEmulator.exe` | Native executable |
| Native DLLs | `*.dll` | Audio, input, 3D, JSR184 native bindings |
| Alternative engines | `m3g_*.jar` | Two M3G implementations (swerve, lwjgl) |
| Sensor simulation | `sensorsimulator.jar` | Device sensor emulation |
| API libraries | `uei/` | See kemnnmod/uei/AGENTS.md |
| Localization | `lang/*.txt` | See kemnnmod/lang/AGENTS.md |

## CONVENTIONS
- **Binary-only**: All files are prebuilt; no compilation needed.
- **Cross-platform**: Windows binaries (.exe, .dll) plus Java JARs (platform-independent).
- **File integrity**: Original filenames preserved; checksums should match distribution.
- **No modification**: Binaries are distributed as-is; do not edit in-place.

## ANTI-PATTERNS
- Do not add source files, scripts, or configs to this directory.
- Do not attempt to rebuild or recompile binaries from this distribution.
- Avoid mixing platform binaries (don't place .dll on Linux, .so on Windows).
- Never commit modified binaries to VCS without explicit versioning.

## UNIQUE STYLES
- **Monolithic bundle**: Emulator + native deps + API JARs in one directory.
- **Multiple M3G engines**: Both swerve and LWJGL implementations shipped together.
- **Sensor simulator as JAR**: Unlike native DLLs, sensor simulation is pure Java.
- **Legacy Windows focus**: DLLs target Windows (32-bit); Linux uses .so elsewhere.

## COMMANDS
```bash
# List emulator contents
ls -lh KEmulator.jar

# Check native libraries
ls -lh *.dll

# View JAR manifest
jar tf KEmulator.jar | head

# Inspect sensors
jar tf sensorsimulator.jar
```

## NOTES
- KEmulator.exe and DLLs are Windows-specific; Linux users rely on Java + native .so in system paths.
- The two M3G engines (m3g_swerve.jar, m3g_lwjgl.jar) provide alternative 3D backends.
- uei/ and lang/ are subdomains with their own AGENTS.md files.
