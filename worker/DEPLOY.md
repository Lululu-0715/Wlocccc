# WLOC 自有 Worker 部署说明

这个版本已经去掉对原作者 GitHub / Pages / Worker 地址的依赖。

## 1. 部署 Worker

在 `worker/` 目录执行：

```bash
npx wrangler deploy
```

部署完成后会得到类似：

`https://wloc-spoofer.<你的 Cloudflare 子域>.workers.dev`

## 2. 修改模块里的 Worker 地址

当前仓库为了避免猜测你的 Cloudflare 子域，使用占位符：

`https://YOUR-WLOC-WORKER.workers.dev/`

请把它替换为你实际部署后的 Worker 地址。

需要检查的文件：

- `modules/wloc.sgmodule`
- `modules/wloc.conf`
- `modules/wloc.lpx`
- `README.md`

## 3. GitHub Raw 地址

本仓库的 JS 已统一改成：

`https://raw.githubusercontent.com/Lululu-0715/wloc/refs/heads/main/dist/wloc.js`

`https://raw.githubusercontent.com/Lululu-0715/wloc/refs/heads/main/dist/wloc-settings.js`

图标：

`https://raw.githubusercontent.com/Lululu-0715/wloc/refs/heads/main/wloc.jpg`

这样以后原作者仓库删除不会影响你的模块。
