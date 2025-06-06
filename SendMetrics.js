const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const fs = require('fs');

const url = 'http://localhost:8086'; // ou URL do seu InfluxDB
const token = 'B6JSVCzVbCoU-orWukJPjsBxXVi7Sb0_0GqVuzTKyX8UqVIzA2wyE07WK5Mbp-LRHlO9rCrz51Ez1LLcrziVbQ==';
const org = 'suzano';
const bucket = 'cypress';

const data = JSON.parse(fs.readFileSync('./cypress/reports/mochawesome.json', 'utf-8'));

const influxDB = new InfluxDB({ url, token });
const writeApi = influxDB.getWriteApi(org, bucket);

// Dados simples de exemplo:
const point = new Point('cypress_metrics')
  .intField('total', data.stats.tests)
  .intField('passed', data.stats.passes)
  .intField('failed', data.stats.failures)
  .floatField('duration', data.stats.duration)
  .timestamp(new Date());

writeApi.writePoint(point);
writeApi.close()
  .then(() => {
    console.log('Métricas enviadas com sucesso!');
  })
  .catch((e) => {
    console.error('Erro ao enviar métricas:', e);
  });
