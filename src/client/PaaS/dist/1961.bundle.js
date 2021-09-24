"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[1961],{31961:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '--',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.sql',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    keywords: [\r\n        'ACCESSIBLE',\r\n        'ACCOUNT',\r\n        'ACTION',\r\n        'ADD',\r\n        'AFTER',\r\n        'AGAINST',\r\n        'AGGREGATE',\r\n        'ALGORITHM',\r\n        'ALL',\r\n        'ALTER',\r\n        'ALWAYS',\r\n        'ANALYSE',\r\n        'ANALYZE',\r\n        'AND',\r\n        'ANY',\r\n        'AS',\r\n        'ASC',\r\n        'ASCII',\r\n        'ASENSITIVE',\r\n        'AT',\r\n        'AUTOEXTEND_SIZE',\r\n        'AUTO_INCREMENT',\r\n        'AVG',\r\n        'AVG_ROW_LENGTH',\r\n        'BACKUP',\r\n        'BEFORE',\r\n        'BEGIN',\r\n        'BETWEEN',\r\n        'BIGINT',\r\n        'BINARY',\r\n        'BINLOG',\r\n        'BIT',\r\n        'BLOB',\r\n        'BLOCK',\r\n        'BOOL',\r\n        'BOOLEAN',\r\n        'BOTH',\r\n        'BTREE',\r\n        'BY',\r\n        'BYTE',\r\n        'CACHE',\r\n        'CALL',\r\n        'CASCADE',\r\n        'CASCADED',\r\n        'CASE',\r\n        'CATALOG_NAME',\r\n        'CHAIN',\r\n        'CHANGE',\r\n        'CHANGED',\r\n        'CHANNEL',\r\n        'CHAR',\r\n        'CHARACTER',\r\n        'CHARSET',\r\n        'CHECK',\r\n        'CHECKSUM',\r\n        'CIPHER',\r\n        'CLASS_ORIGIN',\r\n        'CLIENT',\r\n        'CLOSE',\r\n        'COALESCE',\r\n        'CODE',\r\n        'COLLATE',\r\n        'COLLATION',\r\n        'COLUMN',\r\n        'COLUMNS',\r\n        'COLUMN_FORMAT',\r\n        'COLUMN_NAME',\r\n        'COMMENT',\r\n        'COMMIT',\r\n        'COMMITTED',\r\n        'COMPACT',\r\n        'COMPLETION',\r\n        'COMPRESSED',\r\n        'COMPRESSION',\r\n        'CONCURRENT',\r\n        'CONDITION',\r\n        'CONNECTION',\r\n        'CONSISTENT',\r\n        'CONSTRAINT',\r\n        'CONSTRAINT_CATALOG',\r\n        'CONSTRAINT_NAME',\r\n        'CONSTRAINT_SCHEMA',\r\n        'CONTAINS',\r\n        'CONTEXT',\r\n        'CONTINUE',\r\n        'CONVERT',\r\n        'CPU',\r\n        'CREATE',\r\n        'CROSS',\r\n        'CUBE',\r\n        'CURRENT',\r\n        'CURRENT_DATE',\r\n        'CURRENT_TIME',\r\n        'CURRENT_TIMESTAMP',\r\n        'CURRENT_USER',\r\n        'CURSOR',\r\n        'CURSOR_NAME',\r\n        'DATA',\r\n        'DATABASE',\r\n        'DATABASES',\r\n        'DATAFILE',\r\n        'DATE',\r\n        'DATETIME',\r\n        'DAY',\r\n        'DAY_HOUR',\r\n        'DAY_MICROSECOND',\r\n        'DAY_MINUTE',\r\n        'DAY_SECOND',\r\n        'DEALLOCATE',\r\n        'DEC',\r\n        'DECIMAL',\r\n        'DECLARE',\r\n        'DEFAULT',\r\n        'DEFAULT_AUTH',\r\n        'DEFINER',\r\n        'DELAYED',\r\n        'DELAY_KEY_WRITE',\r\n        'DELETE',\r\n        'DESC',\r\n        'DESCRIBE',\r\n        'DES_KEY_FILE',\r\n        'DETERMINISTIC',\r\n        'DIAGNOSTICS',\r\n        'DIRECTORY',\r\n        'DISABLE',\r\n        'DISCARD',\r\n        'DISK',\r\n        'DISTINCT',\r\n        'DISTINCTROW',\r\n        'DIV',\r\n        'DO',\r\n        'DOUBLE',\r\n        'DROP',\r\n        'DUAL',\r\n        'DUMPFILE',\r\n        'DUPLICATE',\r\n        'DYNAMIC',\r\n        'EACH',\r\n        'ELSE',\r\n        'ELSEIF',\r\n        'ENABLE',\r\n        'ENCLOSED',\r\n        'ENCRYPTION',\r\n        'END',\r\n        'ENDS',\r\n        'ENGINE',\r\n        'ENGINES',\r\n        'ENUM',\r\n        'ERROR',\r\n        'ERRORS',\r\n        'ESCAPE',\r\n        'ESCAPED',\r\n        'EVENT',\r\n        'EVENTS',\r\n        'EVERY',\r\n        'EXCHANGE',\r\n        'EXECUTE',\r\n        'EXISTS',\r\n        'EXIT',\r\n        'EXPANSION',\r\n        'EXPIRE',\r\n        'EXPLAIN',\r\n        'EXPORT',\r\n        'EXTENDED',\r\n        'EXTENT_SIZE',\r\n        'FALSE',\r\n        'FAST',\r\n        'FAULTS',\r\n        'FETCH',\r\n        'FIELDS',\r\n        'FILE',\r\n        'FILE_BLOCK_SIZE',\r\n        'FILTER',\r\n        'FIRST',\r\n        'FIXED',\r\n        'FLOAT',\r\n        'FLOAT4',\r\n        'FLOAT8',\r\n        'FLUSH',\r\n        'FOLLOWS',\r\n        'FOR',\r\n        'FORCE',\r\n        'FOREIGN',\r\n        'FORMAT',\r\n        'FOUND',\r\n        'FROM',\r\n        'FULL',\r\n        'FULLTEXT',\r\n        'FUNCTION',\r\n        'GENERAL',\r\n        'GENERATED',\r\n        'GEOMETRY',\r\n        'GEOMETRYCOLLECTION',\r\n        'GET',\r\n        'GET_FORMAT',\r\n        'GLOBAL',\r\n        'GRANT',\r\n        'GRANTS',\r\n        'GROUP',\r\n        'GROUP_REPLICATION',\r\n        'HANDLER',\r\n        'HASH',\r\n        'HAVING',\r\n        'HELP',\r\n        'HIGH_PRIORITY',\r\n        'HOST',\r\n        'HOSTS',\r\n        'HOUR',\r\n        'HOUR_MICROSECOND',\r\n        'HOUR_MINUTE',\r\n        'HOUR_SECOND',\r\n        'IDENTIFIED',\r\n        'IF',\r\n        'IGNORE',\r\n        'IGNORE_SERVER_IDS',\r\n        'IMPORT',\r\n        'INDEX',\r\n        'INDEXES',\r\n        'INFILE',\r\n        'INITIAL_SIZE',\r\n        'INNER',\r\n        'INOUT',\r\n        'INSENSITIVE',\r\n        'INSERT',\r\n        'INSERT_METHOD',\r\n        'INSTALL',\r\n        'INSTANCE',\r\n        'INT',\r\n        'INT1',\r\n        'INT2',\r\n        'INT3',\r\n        'INT4',\r\n        'INT8',\r\n        'INTEGER',\r\n        'INTERVAL',\r\n        'INTO',\r\n        'INVOKER',\r\n        'IO',\r\n        'IO_AFTER_GTIDS',\r\n        'IO_BEFORE_GTIDS',\r\n        'IO_THREAD',\r\n        'IPC',\r\n        'ISOLATION',\r\n        'ISSUER',\r\n        'ITERATE',\r\n        'JOIN',\r\n        'JSON',\r\n        'KEY',\r\n        'KEYS',\r\n        'KEY_BLOCK_SIZE',\r\n        'KILL',\r\n        'LANGUAGE',\r\n        'LAST',\r\n        'LEADING',\r\n        'LEAVE',\r\n        'LEAVES',\r\n        'LEFT',\r\n        'LESS',\r\n        'LEVEL',\r\n        'LIKE',\r\n        'LIMIT',\r\n        'LINEAR',\r\n        'LINES',\r\n        'LINESTRING',\r\n        'LIST',\r\n        'LOAD',\r\n        'LOCAL',\r\n        'LOCALTIME',\r\n        'LOCALTIMESTAMP',\r\n        'LOCK',\r\n        'LOCKS',\r\n        'LOGFILE',\r\n        'LOGS',\r\n        'LONG',\r\n        'LONGBLOB',\r\n        'LONGTEXT',\r\n        'LOOP',\r\n        'LOW_PRIORITY',\r\n        'MASTER',\r\n        'MASTER_AUTO_POSITION',\r\n        'MASTER_BIND',\r\n        'MASTER_CONNECT_RETRY',\r\n        'MASTER_DELAY',\r\n        'MASTER_HEARTBEAT_PERIOD',\r\n        'MASTER_HOST',\r\n        'MASTER_LOG_FILE',\r\n        'MASTER_LOG_POS',\r\n        'MASTER_PASSWORD',\r\n        'MASTER_PORT',\r\n        'MASTER_RETRY_COUNT',\r\n        'MASTER_SERVER_ID',\r\n        'MASTER_SSL',\r\n        'MASTER_SSL_CA',\r\n        'MASTER_SSL_CAPATH',\r\n        'MASTER_SSL_CERT',\r\n        'MASTER_SSL_CIPHER',\r\n        'MASTER_SSL_CRL',\r\n        'MASTER_SSL_CRLPATH',\r\n        'MASTER_SSL_KEY',\r\n        'MASTER_SSL_VERIFY_SERVER_CERT',\r\n        'MASTER_TLS_VERSION',\r\n        'MASTER_USER',\r\n        'MATCH',\r\n        'MAXVALUE',\r\n        'MAX_CONNECTIONS_PER_HOUR',\r\n        'MAX_QUERIES_PER_HOUR',\r\n        'MAX_ROWS',\r\n        'MAX_SIZE',\r\n        'MAX_STATEMENT_TIME',\r\n        'MAX_UPDATES_PER_HOUR',\r\n        'MAX_USER_CONNECTIONS',\r\n        'MEDIUM',\r\n        'MEDIUMBLOB',\r\n        'MEDIUMINT',\r\n        'MEDIUMTEXT',\r\n        'MEMORY',\r\n        'MERGE',\r\n        'MESSAGE_TEXT',\r\n        'MICROSECOND',\r\n        'MIDDLEINT',\r\n        'MIGRATE',\r\n        'MINUTE',\r\n        'MINUTE_MICROSECOND',\r\n        'MINUTE_SECOND',\r\n        'MIN_ROWS',\r\n        'MOD',\r\n        'MODE',\r\n        'MODIFIES',\r\n        'MODIFY',\r\n        'MONTH',\r\n        'MULTILINESTRING',\r\n        'MULTIPOINT',\r\n        'MULTIPOLYGON',\r\n        'MUTEX',\r\n        'MYSQL_ERRNO',\r\n        'NAME',\r\n        'NAMES',\r\n        'NATIONAL',\r\n        'NATURAL',\r\n        'NCHAR',\r\n        'NDB',\r\n        'NDBCLUSTER',\r\n        'NEVER',\r\n        'NEW',\r\n        'NEXT',\r\n        'NO',\r\n        'NODEGROUP',\r\n        'NONBLOCKING',\r\n        'NONE',\r\n        'NO_WAIT',\r\n        'NO_WRITE_TO_BINLOG',\r\n        'NUMBER',\r\n        'NUMERIC',\r\n        'NVARCHAR',\r\n        'OFFSET',\r\n        'OLD_PASSWORD',\r\n        'ON',\r\n        'ONE',\r\n        'ONLY',\r\n        'OPEN',\r\n        'OPTIMIZE',\r\n        'OPTIMIZER_COSTS',\r\n        'OPTION',\r\n        'OPTIONALLY',\r\n        'OPTIONS',\r\n        'OR',\r\n        'ORDER',\r\n        'OUT',\r\n        'OUTER',\r\n        'OUTFILE',\r\n        'OWNER',\r\n        'PACK_KEYS',\r\n        'PAGE',\r\n        'PARSER',\r\n        'PARSE_GCOL_EXPR',\r\n        'PARTIAL',\r\n        'PARTITION',\r\n        'PARTITIONING',\r\n        'PARTITIONS',\r\n        'PASSWORD',\r\n        'PHASE',\r\n        'PLUGIN',\r\n        'PLUGINS',\r\n        'PLUGIN_DIR',\r\n        'POINT',\r\n        'POLYGON',\r\n        'PORT',\r\n        'PRECEDES',\r\n        'PRECISION',\r\n        'PREPARE',\r\n        'PRESERVE',\r\n        'PREV',\r\n        'PRIMARY',\r\n        'PRIVILEGES',\r\n        'PROCEDURE',\r\n        'PROCESSLIST',\r\n        'PROFILE',\r\n        'PROFILES',\r\n        'PROXY',\r\n        'PURGE',\r\n        'QUARTER',\r\n        'QUERY',\r\n        'QUICK',\r\n        'RANGE',\r\n        'READ',\r\n        'READS',\r\n        'READ_ONLY',\r\n        'READ_WRITE',\r\n        'REAL',\r\n        'REBUILD',\r\n        'RECOVER',\r\n        'REDOFILE',\r\n        'REDO_BUFFER_SIZE',\r\n        'REDUNDANT',\r\n        'REFERENCES',\r\n        'REGEXP',\r\n        'RELAY',\r\n        'RELAYLOG',\r\n        'RELAY_LOG_FILE',\r\n        'RELAY_LOG_POS',\r\n        'RELAY_THREAD',\r\n        'RELEASE',\r\n        'RELOAD',\r\n        'REMOVE',\r\n        'RENAME',\r\n        'REORGANIZE',\r\n        'REPAIR',\r\n        'REPEAT',\r\n        'REPEATABLE',\r\n        'REPLACE',\r\n        'REPLICATE_DO_DB',\r\n        'REPLICATE_DO_TABLE',\r\n        'REPLICATE_IGNORE_DB',\r\n        'REPLICATE_IGNORE_TABLE',\r\n        'REPLICATE_REWRITE_DB',\r\n        'REPLICATE_WILD_DO_TABLE',\r\n        'REPLICATE_WILD_IGNORE_TABLE',\r\n        'REPLICATION',\r\n        'REQUIRE',\r\n        'RESET',\r\n        'RESIGNAL',\r\n        'RESTORE',\r\n        'RESTRICT',\r\n        'RESUME',\r\n        'RETURN',\r\n        'RETURNED_SQLSTATE',\r\n        'RETURNS',\r\n        'REVERSE',\r\n        'REVOKE',\r\n        'RIGHT',\r\n        'RLIKE',\r\n        'ROLLBACK',\r\n        'ROLLUP',\r\n        'ROTATE',\r\n        'ROUTINE',\r\n        'ROW',\r\n        'ROWS',\r\n        'ROW_COUNT',\r\n        'ROW_FORMAT',\r\n        'RTREE',\r\n        'SAVEPOINT',\r\n        'SCHEDULE',\r\n        'SCHEMA',\r\n        'SCHEMAS',\r\n        'SCHEMA_NAME',\r\n        'SECOND',\r\n        'SECOND_MICROSECOND',\r\n        'SECURITY',\r\n        'SELECT',\r\n        'SENSITIVE',\r\n        'SEPARATOR',\r\n        'SERIAL',\r\n        'SERIALIZABLE',\r\n        'SERVER',\r\n        'SESSION',\r\n        'SET',\r\n        'SHARE',\r\n        'SHOW',\r\n        'SHUTDOWN',\r\n        'SIGNAL',\r\n        'SIGNED',\r\n        'SIMPLE',\r\n        'SLAVE',\r\n        'SLOW',\r\n        'SMALLINT',\r\n        'SNAPSHOT',\r\n        'SOCKET',\r\n        'SOME',\r\n        'SONAME',\r\n        'SOUNDS',\r\n        'SOURCE',\r\n        'SPATIAL',\r\n        'SPECIFIC',\r\n        'SQL',\r\n        'SQLEXCEPTION',\r\n        'SQLSTATE',\r\n        'SQLWARNING',\r\n        'SQL_AFTER_GTIDS',\r\n        'SQL_AFTER_MTS_GAPS',\r\n        'SQL_BEFORE_GTIDS',\r\n        'SQL_BIG_RESULT',\r\n        'SQL_BUFFER_RESULT',\r\n        'SQL_CACHE',\r\n        'SQL_CALC_FOUND_ROWS',\r\n        'SQL_NO_CACHE',\r\n        'SQL_SMALL_RESULT',\r\n        'SQL_THREAD',\r\n        'SQL_TSI_DAY',\r\n        'SQL_TSI_HOUR',\r\n        'SQL_TSI_MINUTE',\r\n        'SQL_TSI_MONTH',\r\n        'SQL_TSI_QUARTER',\r\n        'SQL_TSI_SECOND',\r\n        'SQL_TSI_WEEK',\r\n        'SQL_TSI_YEAR',\r\n        'SSL',\r\n        'STACKED',\r\n        'START',\r\n        'STARTING',\r\n        'STARTS',\r\n        'STATS_AUTO_RECALC',\r\n        'STATS_PERSISTENT',\r\n        'STATS_SAMPLE_PAGES',\r\n        'STATUS',\r\n        'STOP',\r\n        'STORAGE',\r\n        'STORED',\r\n        'STRAIGHT_JOIN',\r\n        'STRING',\r\n        'SUBCLASS_ORIGIN',\r\n        'SUBJECT',\r\n        'SUBPARTITION',\r\n        'SUBPARTITIONS',\r\n        'SUPER',\r\n        'SUSPEND',\r\n        'SWAPS',\r\n        'SWITCHES',\r\n        'TABLE',\r\n        'TABLES',\r\n        'TABLESPACE',\r\n        'TABLE_CHECKSUM',\r\n        'TABLE_NAME',\r\n        'TEMPORARY',\r\n        'TEMPTABLE',\r\n        'TERMINATED',\r\n        'TEXT',\r\n        'THAN',\r\n        'THEN',\r\n        'TIME',\r\n        'TIMESTAMP',\r\n        'TIMESTAMPADD',\r\n        'TIMESTAMPDIFF',\r\n        'TINYBLOB',\r\n        'TINYINT',\r\n        'TINYTEXT',\r\n        'TO',\r\n        'TRAILING',\r\n        'TRANSACTION',\r\n        'TRIGGER',\r\n        'TRIGGERS',\r\n        'TRUE',\r\n        'TRUNCATE',\r\n        'TYPE',\r\n        'TYPES',\r\n        'UNCOMMITTED',\r\n        'UNDEFINED',\r\n        'UNDO',\r\n        'UNDOFILE',\r\n        'UNDO_BUFFER_SIZE',\r\n        'UNICODE',\r\n        'UNINSTALL',\r\n        'UNION',\r\n        'UNIQUE',\r\n        'UNKNOWN',\r\n        'UNLOCK',\r\n        'UNSIGNED',\r\n        'UNTIL',\r\n        'UPDATE',\r\n        'UPGRADE',\r\n        'USAGE',\r\n        'USE',\r\n        'USER',\r\n        'USER_RESOURCES',\r\n        'USE_FRM',\r\n        'USING',\r\n        'UTC_DATE',\r\n        'UTC_TIME',\r\n        'UTC_TIMESTAMP',\r\n        'VALIDATION',\r\n        'VALUE',\r\n        'VALUES',\r\n        'VARBINARY',\r\n        'VARCHAR',\r\n        'VARCHARACTER',\r\n        'VARIABLES',\r\n        'VARYING',\r\n        'VIEW',\r\n        'VIRTUAL',\r\n        'WAIT',\r\n        'WARNINGS',\r\n        'WEEK',\r\n        'WEIGHT_STRING',\r\n        'WHEN',\r\n        'WHERE',\r\n        'WHILE',\r\n        'WITH',\r\n        'WITHOUT',\r\n        'WORK',\r\n        'WRAPPER',\r\n        'WRITE',\r\n        'X509',\r\n        'XA',\r\n        'XID',\r\n        'XML',\r\n        'XOR',\r\n        'YEAR',\r\n        'YEAR_MONTH',\r\n        'ZEROFILL'\r\n    ],\r\n    operators: [\r\n        'AND',\r\n        'BETWEEN',\r\n        'IN',\r\n        'LIKE',\r\n        'NOT',\r\n        'OR',\r\n        'IS',\r\n        'NULL',\r\n        'INTERSECT',\r\n        'UNION',\r\n        'INNER',\r\n        'JOIN',\r\n        'LEFT',\r\n        'OUTER',\r\n        'RIGHT'\r\n    ],\r\n    builtinFunctions: [\r\n        'ABS',\r\n        'ACOS',\r\n        'ADDDATE',\r\n        'ADDTIME',\r\n        'AES_DECRYPT',\r\n        'AES_ENCRYPT',\r\n        'ANY_VALUE',\r\n        'Area',\r\n        'AsBinary',\r\n        'AsWKB',\r\n        'ASCII',\r\n        'ASIN',\r\n        'AsText',\r\n        'AsWKT',\r\n        'ASYMMETRIC_DECRYPT',\r\n        'ASYMMETRIC_DERIVE',\r\n        'ASYMMETRIC_ENCRYPT',\r\n        'ASYMMETRIC_SIGN',\r\n        'ASYMMETRIC_VERIFY',\r\n        'ATAN',\r\n        'ATAN2',\r\n        'ATAN',\r\n        'AVG',\r\n        'BENCHMARK',\r\n        'BIN',\r\n        'BIT_AND',\r\n        'BIT_COUNT',\r\n        'BIT_LENGTH',\r\n        'BIT_OR',\r\n        'BIT_XOR',\r\n        'Buffer',\r\n        'CAST',\r\n        'CEIL',\r\n        'CEILING',\r\n        'Centroid',\r\n        'CHAR',\r\n        'CHAR_LENGTH',\r\n        'CHARACTER_LENGTH',\r\n        'CHARSET',\r\n        'COALESCE',\r\n        'COERCIBILITY',\r\n        'COLLATION',\r\n        'COMPRESS',\r\n        'CONCAT',\r\n        'CONCAT_WS',\r\n        'CONNECTION_ID',\r\n        'Contains',\r\n        'CONV',\r\n        'CONVERT',\r\n        'CONVERT_TZ',\r\n        'ConvexHull',\r\n        'COS',\r\n        'COT',\r\n        'COUNT',\r\n        'CRC32',\r\n        'CREATE_ASYMMETRIC_PRIV_KEY',\r\n        'CREATE_ASYMMETRIC_PUB_KEY',\r\n        'CREATE_DH_PARAMETERS',\r\n        'CREATE_DIGEST',\r\n        'Crosses',\r\n        'CURDATE',\r\n        'CURRENT_DATE',\r\n        'CURRENT_TIME',\r\n        'CURRENT_TIMESTAMP',\r\n        'CURRENT_USER',\r\n        'CURTIME',\r\n        'DATABASE',\r\n        'DATE',\r\n        'DATE_ADD',\r\n        'DATE_FORMAT',\r\n        'DATE_SUB',\r\n        'DATEDIFF',\r\n        'DAY',\r\n        'DAYNAME',\r\n        'DAYOFMONTH',\r\n        'DAYOFWEEK',\r\n        'DAYOFYEAR',\r\n        'DECODE',\r\n        'DEFAULT',\r\n        'DEGREES',\r\n        'DES_DECRYPT',\r\n        'DES_ENCRYPT',\r\n        'Dimension',\r\n        'Disjoint',\r\n        'Distance',\r\n        'ELT',\r\n        'ENCODE',\r\n        'ENCRYPT',\r\n        'EndPoint',\r\n        'Envelope',\r\n        'Equals',\r\n        'EXP',\r\n        'EXPORT_SET',\r\n        'ExteriorRing',\r\n        'EXTRACT',\r\n        'ExtractValue',\r\n        'FIELD',\r\n        'FIND_IN_SET',\r\n        'FLOOR',\r\n        'FORMAT',\r\n        'FOUND_ROWS',\r\n        'FROM_BASE64',\r\n        'FROM_DAYS',\r\n        'FROM_UNIXTIME',\r\n        'GeomCollFromText',\r\n        'GeometryCollectionFromText',\r\n        'GeomCollFromWKB',\r\n        'GeometryCollectionFromWKB',\r\n        'GeometryCollection',\r\n        'GeometryN',\r\n        'GeometryType',\r\n        'GeomFromText',\r\n        'GeometryFromText',\r\n        'GeomFromWKB',\r\n        'GeometryFromWKB',\r\n        'GET_FORMAT',\r\n        'GET_LOCK',\r\n        'GLength',\r\n        'GREATEST',\r\n        'GROUP_CONCAT',\r\n        'GTID_SUBSET',\r\n        'GTID_SUBTRACT',\r\n        'HEX',\r\n        'HOUR',\r\n        'IF',\r\n        'IFNULL',\r\n        'INET_ATON',\r\n        'INET_NTOA',\r\n        'INET6_ATON',\r\n        'INET6_NTOA',\r\n        'INSERT',\r\n        'INSTR',\r\n        'InteriorRingN',\r\n        'Intersects',\r\n        'INTERVAL',\r\n        'IS_FREE_LOCK',\r\n        'IS_IPV4',\r\n        'IS_IPV4_COMPAT',\r\n        'IS_IPV4_MAPPED',\r\n        'IS_IPV6',\r\n        'IS_USED_LOCK',\r\n        'IsClosed',\r\n        'IsEmpty',\r\n        'ISNULL',\r\n        'IsSimple',\r\n        'JSON_APPEND',\r\n        'JSON_ARRAY',\r\n        'JSON_ARRAY_APPEND',\r\n        'JSON_ARRAY_INSERT',\r\n        'JSON_CONTAINS',\r\n        'JSON_CONTAINS_PATH',\r\n        'JSON_DEPTH',\r\n        'JSON_EXTRACT',\r\n        'JSON_INSERT',\r\n        'JSON_KEYS',\r\n        'JSON_LENGTH',\r\n        'JSON_MERGE',\r\n        'JSON_MERGE_PRESERVE',\r\n        'JSON_OBJECT',\r\n        'JSON_QUOTE',\r\n        'JSON_REMOVE',\r\n        'JSON_REPLACE',\r\n        'JSON_SEARCH',\r\n        'JSON_SET',\r\n        'JSON_TYPE',\r\n        'JSON_UNQUOTE',\r\n        'JSON_VALID',\r\n        'LAST_INSERT_ID',\r\n        'LCASE',\r\n        'LEAST',\r\n        'LEFT',\r\n        'LENGTH',\r\n        'LineFromText',\r\n        'LineStringFromText',\r\n        'LineFromWKB',\r\n        'LineStringFromWKB',\r\n        'LineString',\r\n        'LN',\r\n        'LOAD_FILE',\r\n        'LOCALTIME',\r\n        'LOCALTIMESTAMP',\r\n        'LOCATE',\r\n        'LOG',\r\n        'LOG10',\r\n        'LOG2',\r\n        'LOWER',\r\n        'LPAD',\r\n        'LTRIM',\r\n        'MAKE_SET',\r\n        'MAKEDATE',\r\n        'MAKETIME',\r\n        'MASTER_POS_WAIT',\r\n        'MAX',\r\n        'MBRContains',\r\n        'MBRCoveredBy',\r\n        'MBRCovers',\r\n        'MBRDisjoint',\r\n        'MBREqual',\r\n        'MBREquals',\r\n        'MBRIntersects',\r\n        'MBROverlaps',\r\n        'MBRTouches',\r\n        'MBRWithin',\r\n        'MD5',\r\n        'MICROSECOND',\r\n        'MID',\r\n        'MIN',\r\n        'MINUTE',\r\n        'MLineFromText',\r\n        'MultiLineStringFromText',\r\n        'MLineFromWKB',\r\n        'MultiLineStringFromWKB',\r\n        'MOD',\r\n        'MONTH',\r\n        'MONTHNAME',\r\n        'MPointFromText',\r\n        'MultiPointFromText',\r\n        'MPointFromWKB',\r\n        'MultiPointFromWKB',\r\n        'MPolyFromText',\r\n        'MultiPolygonFromText',\r\n        'MPolyFromWKB',\r\n        'MultiPolygonFromWKB',\r\n        'MultiLineString',\r\n        'MultiPoint',\r\n        'MultiPolygon',\r\n        'NAME_CONST',\r\n        'NOT IN',\r\n        'NOW',\r\n        'NULLIF',\r\n        'NumGeometries',\r\n        'NumInteriorRings',\r\n        'NumPoints',\r\n        'OCT',\r\n        'OCTET_LENGTH',\r\n        'OLD_PASSWORD',\r\n        'ORD',\r\n        'Overlaps',\r\n        'PASSWORD',\r\n        'PERIOD_ADD',\r\n        'PERIOD_DIFF',\r\n        'PI',\r\n        'Point',\r\n        'PointFromText',\r\n        'PointFromWKB',\r\n        'PointN',\r\n        'PolyFromText',\r\n        'PolygonFromText',\r\n        'PolyFromWKB',\r\n        'PolygonFromWKB',\r\n        'Polygon',\r\n        'POSITION',\r\n        'POW',\r\n        'POWER',\r\n        'PROCEDURE ANALYSE',\r\n        'QUARTER',\r\n        'QUOTE',\r\n        'RADIANS',\r\n        'RAND',\r\n        'RANDOM_BYTES',\r\n        'RELEASE_ALL_LOCKS',\r\n        'RELEASE_LOCK',\r\n        'REPEAT',\r\n        'REPLACE',\r\n        'REVERSE',\r\n        'RIGHT',\r\n        'ROUND',\r\n        'ROW_COUNT',\r\n        'RPAD',\r\n        'RTRIM',\r\n        'SCHEMA',\r\n        'SEC_TO_TIME',\r\n        'SECOND',\r\n        'SESSION_USER',\r\n        'SHA1',\r\n        'SHA',\r\n        'SHA2',\r\n        'SIGN',\r\n        'SIN',\r\n        'SLEEP',\r\n        'SOUNDEX',\r\n        'SPACE',\r\n        'SQRT',\r\n        'SRID',\r\n        'ST_Area',\r\n        'ST_AsBinary',\r\n        'ST_AsWKB',\r\n        'ST_AsGeoJSON',\r\n        'ST_AsText',\r\n        'ST_AsWKT',\r\n        'ST_Buffer',\r\n        'ST_Buffer_Strategy',\r\n        'ST_Centroid',\r\n        'ST_Contains',\r\n        'ST_ConvexHull',\r\n        'ST_Crosses',\r\n        'ST_Difference',\r\n        'ST_Dimension',\r\n        'ST_Disjoint',\r\n        'ST_Distance',\r\n        'ST_Distance_Sphere',\r\n        'ST_EndPoint',\r\n        'ST_Envelope',\r\n        'ST_Equals',\r\n        'ST_ExteriorRing',\r\n        'ST_GeoHash',\r\n        'ST_GeomCollFromText',\r\n        'ST_GeometryCollectionFromText',\r\n        'ST_GeomCollFromTxt',\r\n        'ST_GeomCollFromWKB',\r\n        'ST_GeometryCollectionFromWKB',\r\n        'ST_GeometryN',\r\n        'ST_GeometryType',\r\n        'ST_GeomFromGeoJSON',\r\n        'ST_GeomFromText',\r\n        'ST_GeometryFromText',\r\n        'ST_GeomFromWKB',\r\n        'ST_GeometryFromWKB',\r\n        'ST_InteriorRingN',\r\n        'ST_Intersection',\r\n        'ST_Intersects',\r\n        'ST_IsClosed',\r\n        'ST_IsEmpty',\r\n        'ST_IsSimple',\r\n        'ST_IsValid',\r\n        'ST_LatFromGeoHash',\r\n        'ST_Length',\r\n        'ST_LineFromText',\r\n        'ST_LineStringFromText',\r\n        'ST_LineFromWKB',\r\n        'ST_LineStringFromWKB',\r\n        'ST_LongFromGeoHash',\r\n        'ST_MakeEnvelope',\r\n        'ST_MLineFromText',\r\n        'ST_MultiLineStringFromText',\r\n        'ST_MLineFromWKB',\r\n        'ST_MultiLineStringFromWKB',\r\n        'ST_MPointFromText',\r\n        'ST_MultiPointFromText',\r\n        'ST_MPointFromWKB',\r\n        'ST_MultiPointFromWKB',\r\n        'ST_MPolyFromText',\r\n        'ST_MultiPolygonFromText',\r\n        'ST_MPolyFromWKB',\r\n        'ST_MultiPolygonFromWKB',\r\n        'ST_NumGeometries',\r\n        'ST_NumInteriorRing',\r\n        'ST_NumInteriorRings',\r\n        'ST_NumPoints',\r\n        'ST_Overlaps',\r\n        'ST_PointFromGeoHash',\r\n        'ST_PointFromText',\r\n        'ST_PointFromWKB',\r\n        'ST_PointN',\r\n        'ST_PolyFromText',\r\n        'ST_PolygonFromText',\r\n        'ST_PolyFromWKB',\r\n        'ST_PolygonFromWKB',\r\n        'ST_Simplify',\r\n        'ST_SRID',\r\n        'ST_StartPoint',\r\n        'ST_SymDifference',\r\n        'ST_Touches',\r\n        'ST_Union',\r\n        'ST_Validate',\r\n        'ST_Within',\r\n        'ST_X',\r\n        'ST_Y',\r\n        'StartPoint',\r\n        'STD',\r\n        'STDDEV',\r\n        'STDDEV_POP',\r\n        'STDDEV_SAMP',\r\n        'STR_TO_DATE',\r\n        'STRCMP',\r\n        'SUBDATE',\r\n        'SUBSTR',\r\n        'SUBSTRING',\r\n        'SUBSTRING_INDEX',\r\n        'SUBTIME',\r\n        'SUM',\r\n        'SYSDATE',\r\n        'SYSTEM_USER',\r\n        'TAN',\r\n        'TIME',\r\n        'TIME_FORMAT',\r\n        'TIME_TO_SEC',\r\n        'TIMEDIFF',\r\n        'TIMESTAMP',\r\n        'TIMESTAMPADD',\r\n        'TIMESTAMPDIFF',\r\n        'TO_BASE64',\r\n        'TO_DAYS',\r\n        'TO_SECONDS',\r\n        'Touches',\r\n        'TRIM',\r\n        'TRUNCATE',\r\n        'UCASE',\r\n        'UNCOMPRESS',\r\n        'UNCOMPRESSED_LENGTH',\r\n        'UNHEX',\r\n        'UNIX_TIMESTAMP',\r\n        'UpdateXML',\r\n        'UPPER',\r\n        'USER',\r\n        'UTC_DATE',\r\n        'UTC_TIME',\r\n        'UTC_TIMESTAMP',\r\n        'UUID',\r\n        'UUID_SHORT',\r\n        'VALIDATE_PASSWORD_STRENGTH',\r\n        'VALUES',\r\n        'VAR_POP',\r\n        'VAR_SAMP',\r\n        'VARIANCE',\r\n        'VERSION',\r\n        'WAIT_FOR_EXECUTED_GTID_SET',\r\n        'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS',\r\n        'WEEK',\r\n        'WEEKDAY',\r\n        'WEEKOFYEAR',\r\n        'WEIGHT_STRING',\r\n        'Within',\r\n        'X',\r\n        'Y',\r\n        'YEAR',\r\n        'YEARWEEK'\r\n    ],\r\n    builtinVariables: [\r\n    // NOT SUPPORTED\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@comments' },\r\n            { include: '@whitespace' },\r\n            { include: '@numbers' },\r\n            { include: '@strings' },\r\n            { include: '@complexIdentifiers' },\r\n            { include: '@scopes' },\r\n            [/[;,.]/, 'delimiter'],\r\n            [/[()]/, '@brackets'],\r\n            [\r\n                /[\\w@]+/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@operators': 'operator',\r\n                        '@builtinVariables': 'predefined',\r\n                        '@builtinFunctions': 'predefined',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            [/[<>=!%&+\\-*/|~^]/, 'operator']\r\n        ],\r\n        whitespace: [[/\\s+/, 'white']],\r\n        comments: [\r\n            [/--+.*/, 'comment'],\r\n            [/#+.*/, 'comment'],\r\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\r\n        ],\r\n        comment: [\r\n            [/[^*/]+/, 'comment'],\r\n            // Not supporting nested comments, as nested comments seem to not be standard?\r\n            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic\r\n            // [/\\/\\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(\r\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\r\n            [/./, 'comment']\r\n        ],\r\n        numbers: [\r\n            [/0[xX][0-9a-fA-F]*/, 'number'],\r\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\r\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\r\n        ],\r\n        strings: [\r\n            [/'/, { token: 'string', next: '@string' }],\r\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\r\n        ],\r\n        string: [\r\n            [/[^']+/, 'string'],\r\n            [/''/, 'string'],\r\n            [/'/, { token: 'string', next: '@pop' }]\r\n        ],\r\n        stringDouble: [\r\n            [/[^\"]+/, 'string.double'],\r\n            [/\"\"/, 'string.double'],\r\n            [/\"/, { token: 'string.double', next: '@pop' }]\r\n        ],\r\n        complexIdentifiers: [[/`/, { token: 'identifier.quote', next: '@quotedIdentifier' }]],\r\n        quotedIdentifier: [\r\n            [/[^`]+/, 'identifier'],\r\n            [/``/, 'identifier'],\r\n            [/`/, { token: 'identifier.quote', next: '@pop' }]\r\n        ],\r\n        scopes: [\r\n        // NOT SUPPORTED\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.js?")}}]);