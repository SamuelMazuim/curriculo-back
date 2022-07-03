require("dotenv/config");

let config = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/core/infra/database/entities/**/*"],
    migrations: ["dist/core/infra/database/entities/**/*"],
    cli: {
        entitiesDir: "dist/core/infra/database/entities/**/*",
        migrationsDir: "dist/core/infra/database/entities/**/*",
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};

if (process.env.NODE_ENV === "dev") {
    config = {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: ["src/core/infra/database/entities/**/*"],
        migrations: ["src/core/infra/database/migrations/**/*"],
        cli: {
            entitiesDir: "src/core/infra/database/entities/**/*",
            migrationsDir: "src/core/infra/database/migrations/**/*",
        },
        synchronize: false,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    };
}

// if (process.env.NODE_ENV === "test") {
//     config = {
//         type: "sqlite",
//         database: "./dbtest.sqlite",
//         entities: ["src/core/infra/database/entities/**/*.ts"],
//         migrations: ["tests/core/infra/database/migrations/**/*.ts"],
//         cli: {
//             entitiesDir: "src/core/infra/database/entities",
//             migrationsDir: "tests/core/infra/database/migrations",
//         },
//         synchronize: false,
//     };
// }
module.exports = config;
