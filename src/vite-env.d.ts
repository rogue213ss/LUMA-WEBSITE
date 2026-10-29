/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LUMA_AUTH_API?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
