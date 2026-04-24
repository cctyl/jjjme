# J2ME 开发项目

## 项目目录

```
/root/prj/jar_build/
├── j2me-project/      # J2ME 项目模板
├── kemnnmod/          # J2ME 模拟器+API库
└── qq2008.jar        # 测试用 JAR
```

## 各目录说明

### j2me-project/

你的 J2ME 项目代码。

| 文件 | 说明 |
|------|------|
| `build.sh` | 构建脚本 |
| `MANIFEST.MF` | MIDlet 配置 |
| `src/` | 源代码 |
| `lib/` | J2ME API 库 |
| `README.md` | 项目文档 |
| `app.jar` | 编译产物 |

**使用**：
```bash
cd j2me-project
./build.sh        # 编译
./build.sh clean # 清理
```

### kemnnmod/

J2ME 模拟器（KEmulator）和备用 API 库。

| 文件 | 说明 |
|------|------|
| `KEmulator.exe` | Windows 模拟器 |
| `uei/` | 备用 J2ME API 库 |

从 `uei/` 可获取更多 JSR API（如需多媒体、蓝牙等）。

### qq2008.jar

测试用 JAR，可用于验证模拟器工作正常。

---

## 快速开始（新项目）

1. 复制项目：
   ```bash
   cp -r j2me-project myproject
   cd myproject
   ```

2. 修改 `MANIFEST.MF`

3. 编写代码到 `src/`

4. 构建：
   ```bash
   ./build.sh
   ```

5. 测试：复制 `app.jar` 到 Windows 用模拟器运行