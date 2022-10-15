#!/bin/bash
role=${ROLE:-server}

if [ "$role" == "server" ]; then
    echo "API Server starting"
    npm run build
    npm run start
elif [ "$role" == "bootstrap" ]; then
    echo "Seeding database..."
    npm run migrate
    npx knex seed:run --knexfile ./src/database/knexfile.ts
    echo "Bootstrap is finished."
else
    echo "Role not matched: \"$role\""
    exit 1
fi

exec "$@"