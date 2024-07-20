const pdf2excel = require('pdf-to-excel');
const path = require('path');

for(let i = 1; i<=2;i++){
  const pdfPath = path.join(__dirname, 'pdf/teste'+i+'.pdf');
  const excelPath = path.join(__dirname, 'xls/teste'+i+'.xlsx');



pdf2excel.genXlsx(pdfPath, excelPath)

  .then(() => {
    console.log('Conversão concluída com sucesso!');
  })
  .catch(err => {
    console.error('Erro durante a conversão:', err);
  });
}


