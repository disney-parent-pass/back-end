#!/bin/bash

# Get containers role
role=${ROLE}

# Decide it's next series of tasks
if [ "$role" == "server" ]; then
    echo "API Server starting..."
    npm run build
    npm run start
elif [ "$role" == "bootstrap" ]; then
    echo "Seeding database..."
    npm run container-migrate
    npx knex seed:run --knexfile ./src/database/knexfile.ts
    echo "Bootstrap is finished."
else
    echo "Role not matched: \"$role\""
    exit 1
fi

# Return control back to the container
exec "$@"