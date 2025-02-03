// frontend/src/reportWebVitals.ts
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      });
    }
  };
  
  export default reportWebVitals;
  