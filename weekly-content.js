window.weeklyExercises = [
  [
    'Write a CSV reader that reports missing required columns and malformed row numbers without crashing on the first bad record.',
    'Implement validation for date, location ID and numeric rainfall/temperature fields; return a valid-row collection and an error summary.',
    'Calculate count, mean, minimum and maximum for two numeric fields, then emit a stable, indented JSON report.',
    'Add a command-line interface with input/output paths and test a clean file, an empty file, missing columns and invalid numbers.'
  ],
  [
    'Refactor the analyzer into parser, validator, statistics and report modules with a documented public API.',
    'Create an Observation dataclass with type hints and validation; make a generator process a large CSV one record at a time.',
    'Add pytest unit tests for boundaries and malformed records, plus a test for the generated JSON schema.',
    'Add structured logging and package configuration; install the package in editable mode and run its CLI from outside the repo.'
  ],
  [
    'Load a dataset into Pandas, profile missing values and outliers, and document each cleaning rule before applying it.',
    'Reproduce three column summaries with NumPy vector operations and compare their output against a simple loop implementation.',
    'Use SciPy for one justified statistical test or signal operation; state the assumptions and interpret the output.',
    'Create a Matplotlib figure with title, units, legend and source note; save it to disk and make the analysis rerunnable.'
  ],
  [
    'Inspect a GeoTIFF with Rasterio and print its CRS, bounds, dimensions, transform, band count and NoData metadata.',
    'Reproject one raster to a documented target CRS and verify the resulting CRS and bounds programmatically.',
    'Clip the reprojected raster to a GeoJSON/shapefile boundary; compare the output footprint with the boundary.',
    'Build a small GDAL/Rasterio preprocessing script with clear errors for missing CRS, invalid geometry and empty clips.'
  ],
  [
    'Define typed ingest, validate, transform and export functions and pass a configuration object between stages.',
    'Reject a malformed schema and a mismatched CRS with actionable messages; test both failure paths.',
    'Run the same input/configuration twice and compare output checksums to demonstrate reproducibility.',
    'Profile the slowest stage on a representative sample, record baseline timing and make one measured improvement.'
  ],
  [
    'Create FastAPI health and version endpoints with response models and a test client check.',
    'Implement observation list and detail GET endpoints with filtering, pagination and a clear 404 for unknown IDs.',
    'Add a POST endpoint with Pydantic validation; test valid input, missing fields, wrong types and expected status codes.',
    'Generate the OpenAPI docs and write a curl walkthrough covering a successful request and a failure response.'
  ],
  [
    'Draw a relational schema for users, observations and locations; identify primary keys, foreign keys and uniqueness rules.',
    'Write SQL queries that join observations to locations, filter by date and compute grouped statistics; explain the query plan for one index.',
    'Connect SQLAlchemy models to PostgreSQL and create the initial Alembic migration from a clean database.',
    'Add repository tests for create/read/update, foreign-key rejection and transaction rollback using an isolated test database.'
  ],
  [
    'Implement registration and login using a maintained password-hashing library; prove plaintext passwords are never stored.',
    'Add token issuance and verification with expiry, issuer/audience checks and secrets supplied only through environment variables.',
    'Protect one route and test missing, expired, malformed and valid tokens plus a user attempting to access another user’s data.',
    'Add request validation, security headers and a short threat review covering token storage, brute force and secret rotation.'
  ],
  [
    'Build one provider adapter for a hosted LLM API and one for Ollama that return the same typed response object.',
    'Send the same prompt to both providers; record model/version, latency, errors and output quality in a comparison table.',
    'Validate structured output against a schema and recover cleanly from malformed JSON, timeout and unavailable local model.',
    'Add a model-selection note that weighs quality, latency, privacy, cost and context length; keep credentials server-side.'
  ],
  [
    'Define JSON schemas for three tools: validate observation CSV, summarize a numeric column, and inspect raster metadata.',
    'Run a bounded agent loop that validates arguments and routes only to those allow-listed Python functions.',
    'Test unknown tools, wrong argument types, tool exceptions and a response that exceeds the maximum iteration count.',
    'Add an approval gate for file writes and show a trace of instructions, tool inputs, outputs and final answer.'
  ],
  [
    'Prepare a small set of agricultural research documents with stable source IDs and extract text with page/title metadata.',
    'Compare two chunk sizes/overlaps on a set of questions and inspect whether retrieved chunks contain the answer evidence.',
    'Store embeddings in pgvector and implement top-k retrieval with a similarity threshold and source metadata.',
    'Generate answers with citations to retrieved passages; test a relevant question and a no-evidence question.'
  ],
  [
    'Model a LangGraph state with request, retrieved evidence, tool result, draft, validation status and bounded retry count.',
    'Implement conditional routing so a numeric analysis request calls a scientific tool while a literature question uses retrieval.',
    'Build a small evaluation set with expected evidence and score answer relevance, citation support and tool correctness.',
    'Inject retrieval failure and malformed model output; verify retry limits, observability traces and a useful final failure message.'
  ],
  [
    'Benchmark the same representative array workload sequentially, with threads and with processes at three input sizes.',
    'Repeat timing runs, report median duration and memory, and verify each execution mode returns equivalent results.',
    'Use a separate I/O-bound workload to compare synchronous and asynchronous requests; explain where async helps or does not.',
    'Write a bottleneck report tying the selected execution model to measurements, transaction boundaries and cache behaviour.'
  ],
  [
    'Create an API endpoint that enqueues satellite processing and returns a durable job ID; build a worker that updates job states.',
    'Make submission idempotent with a caller key and prove duplicate submissions do not create duplicate processing.',
    'Simulate a transient error and a permanent error; test bounded retries, backoff, failure status and operator-visible details.',
    'Add a Redis cache for one read path with an explicit invalidation rule and measure the hit/miss behaviour.'
  ],
  [
    'Write Dockerfiles for API and worker and a Compose stack with PostgreSQL, Redis, health checks and persistent local volumes.',
    'Add a CI workflow that runs lint/type checks/tests and builds the images on a clean checkout.',
    'Deploy to a selected host using environment-managed secrets; verify health, logs and one end-to-end processing job.',
    'Document startup, migrations, backup, rollback and recovery from a failed worker; never commit credentials.'
  ],
  [
    'Create a new repository for a document workflow app, define user/document/job tables and sketch the upload-to-summary flow.',
    'Implement authenticated upload/list/status/download endpoints with file size/type limits and per-user ownership checks.',
    'Queue text extraction and AI summarization in the background; store job states and make repeated submissions safe.',
    'Deploy the app, run its test suite against PostgreSQL, and complete a demo from upload through summary download.'
  ],
  [
    'Run an end-to-end acceptance flow for the digital twin from data selection through result visualization and capture any blockers.',
    'Add or repair tests for critical API, database, geospatial and AI paths; inject one dependency failure and verify recovery behaviour.',
    'Produce setup/operations documentation, architecture and data-flow diagrams, known limitations and a release checklist.',
    'Rehearse a five-minute demo and defend three architecture decisions with alternatives, evidence, trade-offs and next improvements.'
  ]
];
