#!/usr/bin/env node

// fallback to global only if local doesn't exist!
require('fallback-cli')('@crazyfactory/uptrans/lib/index.js', "./index.js");
