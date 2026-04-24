# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-24
**Branch:** main

## OVERVIEW
kemnnmod/uei/ contains 29 Java ME API library JARs for IDE integration (Eclipse MTJ, NetBeans UEI). Mix of standard JSRs, vendor SDKs, and proprietary emulator extensions.

## STRUCTURE
```
kemnnmod/uei/
├── midp21.jar           # MIDP 2.1 core (JSR 118)
├── cldc11.jar           # CLDC 1.1
├── jsr*.jar             # Standard JSR APIs (82,120,135,177,184,179,etc.)
├── nokiaui.jar          # Nokia UI extensions
├── samsungapi.jar       # Samsung proprietary
├── siemensio.jar        # Siemens IO
├── mascotv3.jar         # MascotCapsule 3D
├── filemanagerapi.jar   # Proprietary (unsupported)
├── notificationapi.jar  # Proprietary
├── rpcapi.jar           # Proprietary
├── jsr75_pim.jar        # Unsupported
├── jsr226.jar           # Unsupported (SVG)
├── jsr234.jar           # Unsupported (AMMS)
├── nokia_ui1.6.jar      # Unsupported (partial)
├── jsr211.jar           # Unsupported (CHAPI)
├── preverify.exe        # Bytecode verifier (Symbian^3)
├── emulator.jar / .exe  # UEI integration helper
└── readme.txt           # Vendor credits & unsupported list
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Core platform | `midp21.jar`, `cldc11.jar` | MIDP 2.1 + CLDC 1.1 baseline |
| Bluetooth | `jsr82.jar` | JSR 82 implementation |
| SMS | `jsr120.jar` | JSR 120 (Wireless Messaging) |
| Multimedia | `jsr135.jar` | JSR 135 (MMAPI) |
| Crypto | `jsr177.jar` | JSR 177 (Security & Trust) |
| 3D Graphics | `jsr184.jar` | JSR 184 (M3G) |
| Location | `jsr179.jar` | JSR 179 (Location API) |
| Vendor UI | `nokiaui.jar`, `samsungapi.jar` | Nokia/Samsung extensions |
| 3rd-party libs | `mascotv3.jar` | MascotCapsule from woesss |
| Proprietary | `filemanagerapi.jar`, `notificationapi.jar`, `rpcapi.jar` | Kemulator-only |
| Unsupported | `jsr75_pim.jar`, `jsr226.jar`, `jsr234.jar`, `nokia_ui1.6.jar`, `jsr211.jar` | Known gaps |
| Tooling | `preverify.exe` | MIDlet bytecode preverification |

## CONVENTIONS
- **JAR naming**: `jsr<number>.jar` for standard JSRs; vendor name for proprietary (nokiaui, samsungapi).
- **JSR attribution**: Standard APIs reference JSR numbers; proprietary libs marked "JSR: N/A".
- **Origin tracking**: Vendor SDK noted in readme (Nokia Asha SDK v1.0 for most; Symbian^3 for preverify.exe).
- **Unsupported explicit**: readme.txt lists unsupported JSRs to avoid confusion.

## ANTI-PATTERNS
- Do not assume full support for unsupported JSRs (jsr75_pim, jsr226, jsr234, nokia_ui1.6 partial, jsr211, filemanagerapi).
- Do not treat proprietary jars as standard JSRs; they are kemulator-specific.
- Do not rely on nokia_ui1.6.jar for production; it's only partially implemented.
- Avoid mixing UEI jars from different SDK versions; stick to the provided set.

## UNIQUE STYLES
- **Nokia Asha-centric**: Majority of JARs trace to Nokia Asha SDK v1.0.
- **Mixed provenance**: Combines standard JSRs, vendor SDKs (Samsung, Siemens), 3rd-party (mascotv3), and proprietary kemulator libs.
- **IDE integration focus**: UEI designed for Eclipse MTJ / NetBeans, not standalone runtime.
- **Explicit unsupported list**: readme clearly documents what the emulator does NOT support.

## COMMANDS
```bash
# List all JARs
ls -1 *.jar

# Read vendor credits
cat readme.txt

# Inspect a JAR's contents
jar tf midp21.jar | head

# Check preverify tool
./preverify.exe -help  # Windows; or use preverify2.exe
```

## NOTES
- jadx MCP server (opencode.json) can decompile these JARs for inspection if needed.
- The unsupported JSRs are intentionally excluded from emulator runtime; don't attempt to force-load them.
- Some JARs (emulator.jar, emulator.exe) support UEI integration rather than providing APIs.
