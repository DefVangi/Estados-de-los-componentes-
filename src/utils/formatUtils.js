export const formatTotal = (amount) => {
  return amount.toLocaleString('es-CL', { 
    style: 'currency', 
    currency: 'CLP',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0
  });
};