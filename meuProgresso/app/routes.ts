import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // ADICIONE ESTA NOVA LINHA
  route("treino", "routes/treino.tsx") 
] satisfies RouteConfig;