import { ref } from 'vue';

// 創建一個全域的響應式狀態
export const showBaseURL = ref(false);

// 創建一個 composable 函數用於全域訪問
export function useBaseURL() {
  // 切換顯示狀態的方法
  const toggleBaseURL = () => {
    showBaseURL.value = !showBaseURL.value;
  };

  return {
    showBaseURL,
    toggleBaseURL,
  };
}
