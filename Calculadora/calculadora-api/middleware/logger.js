const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const params = req.params;
    const query = req.query;
    const body = req.body;
  
    console.log(`[${timestamp}] ${method} ${url}`);
    if (Object.keys(params).length) {
      console.log('  Params:', params);
    }
    if (Object.keys(query).length) {
      console.log('  Query:', query);
    }
    if (method === 'POST' && Object.keys(body).length) {
      console.log('  Body:', body);
    }
  
    next();
  };
  
  module.exports = logger;
  