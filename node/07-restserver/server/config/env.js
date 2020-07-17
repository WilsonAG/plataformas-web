// ========================================
//                 PORT
// ========================================

process.env.PORT = process.env.PORT || 3000;

// ========================================
//                 ENV
// ========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================================
//                 DB_URI
// ========================================
let dburi;
if (process.env.NODE_ENV === 'dev') {
  dburi = 'mongodb://127.0.0.1:27017/cafe';
} else {
  dburi = 'mongodb+srv://will:HLDhqU0fRlYeDZWn@cluster0-ctnik.mongodb.net/cafe';
}

process.env.DB_URI = dburi;

// ========================================
//                 Token
// ========================================
process.env.TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret';

process.env.TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION || '1d';
