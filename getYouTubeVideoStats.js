function getYouTubeVideoStats() {
  var apiKey = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API
  var videoId = 'VIDEO_ID'; // Reemplaza con el ID del video de YouTube

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;
  
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  var stats = data.items[0].statistics;
  
  var views = stats.viewCount;
  var likes = stats.likeCount;
  var comments = stats.commentCount;
  
  sheet.getRange('A1').setValue('Visualizaciones');
  sheet.getRange('B1').setValue(views);
  
  sheet.getRange('A2').setValue('Me gustas');
  sheet.getRange('B2').setValue(likes);
  
  sheet.getRange('A3').setValue('Comentarios');
  sheet.getRange('B3').setValue(comments);
}
