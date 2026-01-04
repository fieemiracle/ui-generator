// Import necessary modules and classes from various packages.
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

// 定义运行时环境为 Node.js（移除 edge，因为 LangGraph 在 edge 环境下不支持）
// export const runtime = "edge";

// 定义 POST 请求处理函数
export async function POST(req: NextRequest): Promise<Response> {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime: new CopilotRuntime(),
    serviceAdapter: new OpenAIAdapter({
      // 如果你在中国大陆，可以使用代理 URL
      // baseURL: "https://api.openai-proxy.com/v1", // 示例代理地址
      // 或者配置自定义的 OpenAI 兼容服务
      model: "gpt-4o-mini", // 使用更快、更便宜的模型
    }),
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
}