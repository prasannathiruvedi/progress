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

// Week-specific learning guides. Objectives carry an observable implementation,
// evidence and explicit connection to that week's deliverable.
window.weeklyGuides = [
  {
    overview: 'Build the basic habits and Python fluency needed to turn raw agricultural observations into trustworthy output. You will move from small language constructs to file-driven programs, then use Git and the command line to make your work repeatable and reviewable. These foundations matter because every later data pipeline, API and AI tool depends on reliable input handling and clear evidence of how code changes. By week end, you should be able to run and explain a small analyzer that validates a CSV, summarizes valid records and writes a predictable JSON report; it is the first data-ingestion slice of the broader digital-twin roadmap.',
    objectives: [
      {title:'Write basic Python programs', outcome:'Use variables, strings, numbers, booleans, collections, conditionals, loops and functions to express a multi-step data task.', evidence:'Build and run small functions with explicit inputs and return values; trace at least one branch and loop by hand.', project:'Use these constructs to parse each agricultural observation and accumulate report statistics.'},
      {title:'Read and validate structured files', outcome:'Open text files safely, parse CSV rows and JSON, distinguish missing fields from malformed values, and handle expected exceptions.', evidence:'Run the analyzer against a clean file, an empty file, a missing-column file and rows with invalid numbers; report row-level errors without losing later valid rows.', project:'Keep bad observations out of calculations while retaining a clear count and explanation of rejected rows.'},
      {title:'Use Git and Linux command-line basics', outcome:'Navigate directories, inspect files, run a Python script, initialize a repository, stage focused changes and create meaningful commits.', evidence:'Recreate the run from a clean checkout using documented commands and inspect the commit history.', project:'Make the analyzer easy for another person to clone, run and review.'},
      {title:'Produce a deterministic summary report', outcome:'Calculate count, mean, minimum and maximum for selected numeric fields and serialize the result as valid, consistently formatted JSON.', evidence:'Check output against a hand-calculated tiny fixture and confirm identical input produces equivalent output on repeated runs.', project:'Deliver the analyzer\'s central outcome: a defensible summary rather than an opaque script.'}
    ],
    topics:[
      {title:'Python execution and values',detail:'Learn how a Python file is executed, how names refer to values, and how indentation defines blocks. Practise strings, integers, floats, booleans, `None`, conversion, comparison and truthiness; choose a type that matches each observation field.'},
      {title:'Control flow, collections and functions',detail:'Use `if`/`elif`/`else`, `for` and `while` to express validation and aggregation. Compare lists, tuples, sets and dictionaries for ordered rows, fixed records, uniqueness and keyed totals; write small functions with clear parameters and return values.'},
      {title:'Files, CSV and JSON',detail:'Use context managers to open files reliably, set a documented text encoding, and parse CSV headers and rows. Build JSON-compatible dictionaries and lists, serialize them with stable indentation, and distinguish file paths from file contents.'},
      {title:'Validation and failure handling',detail:'Check required headers, row length, empty strings, numeric conversion and plausible values before calculating. Raise or catch focused exceptions at the boundary, include source row numbers in diagnostics, and continue only when doing so preserves trustworthy results.'},
      {title:'Git, shell and reproducible runs',detail:'Practise `pwd`, `ls`, `cd`, `mkdir`, `cat`/`less` and running a script from a chosen working directory. Learn repository status, diff, staging, commit and ignore patterns; record the exact input and command needed to reproduce a report.'}
    ]
  },
  {
    overview:'Turn a one-off Python script into a small, understandable software package. The week connects object-oriented modelling and type hints to module boundaries, streaming iteration, logging and automated tests: each tool makes behaviour easier to reuse, inspect or change. These are the habits that let a growing scientific workflow stay maintainable as data volume and collaborators increase. By the end, the analyzer should be installable and callable through a documented interface, with the same validation and reporting behaviour covered by tests.',
    objectives:[
      {title:'Design clear module and package boundaries',outcome:'Separate parsing, validation, analysis and reporting behind functions with focused responsibilities and an intentional public API.',evidence:'Import and call each public function from outside the package; explain why each module owns its current behaviour.',project:'Make the observation analyzer reusable by later pipeline and API weeks without copying its logic.'},
      {title:'Represent observations with types and lightweight OOP',outcome:'Define an observation model using a dataclass or class, type hints and explicit invariants; choose composition or plain functions where they are simpler.',evidence:'Construct valid and invalid examples and show how type annotations and validation clarify expected fields.',project:'Give CSV records a consistent internal representation before computing statistics.'},
      {title:'Process records lazily and report failures usefully',outcome:'Use iterators or generators to process records incrementally and structured logging to report progress and errors at appropriate levels.',evidence:'Demonstrate that rows are yielded one at a time and that a malformed row produces a useful log entry without dumping an entire dataset.',project:'Keep memory use predictable when the observation file grows.'},
      {title:'Test and package the analyzer',outcome:'Write pytest tests for successful paths, boundaries and failures; configure a package that can be installed and run through a stable CLI.',evidence:'Run the suite from a clean checkout and invoke the installed command outside the repository directory.',project:'Create a dependable foundation for future scientific and backend integrations.'}
    ],
    topics:[
      {title:'Modules, packages and API boundaries',detail:'Learn import resolution, package layout, `__init__`, module responsibilities and the difference between internal helpers and public functions. Avoid circular imports and hidden work at import time; make the CLI a thin layer over reusable analysis functions.'},
      {title:'Classes, dataclasses and type hints',detail:'Use a class when state and behaviour belong together; use a dataclass for a clear record shape. Annotate parameters, return values, collections and optional fields, and validate invariants at construction or at an explicit boundary.'},
      {title:'Iteration and generators',detail:'Understand iterables, iterators, `iter`/`next`, generator functions and lazy evaluation. Compare a generator pipeline with loading every row into a list; identify where exhaustion, resource lifetime and repeatability matter.'},
      {title:'Logging and error design',detail:'Use named loggers and levels rather than scattered prints. Include useful context such as file path and row number, preserve exception causes, and distinguish recoverable record errors from failures that should stop the run.'},
      {title:'pytest and package delivery',detail:'Organize tests around behaviour, use fixtures and parametrization for representative valid and invalid inputs, and test output schemas. Configure project metadata and dependencies, install in editable mode, and document installation, CLI options and expected outputs.'}
    ]
  },
  {
    overview:'Learn to turn arrays and tabular observations into analyses that are numerically sound, inspectable and communicable. NumPy supplies efficient array operations, Pandas supports labelled cleaning and grouping, SciPy adds selected statistical methods, Matplotlib communicates results, and OpenCV introduces image-array operations. The sequence matters: understand the data and assumptions before choosing a transformation or plot. By the end, you should be able to rerun an analysis, justify cleaning and statistical choices, and produce figures that explain a useful result; this builds the quantitative layer of the geospatial and digital-twin work.',
    objectives:[
      {title:'Inspect and transform scientific arrays',outcome:'Create NumPy arrays with understood shape, dtype and missing-value behaviour, and use vectorized operations where they preserve clarity.',evidence:'Compare a vectorized summary with a short loop on a small fixture and explain any floating-point or missing-value differences.',project:'Support repeatable numeric summaries for observation and raster-derived measurements.'},
      {title:'Clean and summarize tabular data',outcome:'Load a dataset into a DataFrame, inspect types and missingness, apply explicit cleaning rules, and produce grouped descriptive summaries.',evidence:'Record before/after row counts and verify one grouped result against a manually checked subset.',project:'Create trustworthy inputs and analysis tables for later scientific pipeline stages.'},
      {title:'Apply one justified SciPy or OpenCV method',outcome:'Choose a basic statistical test, signal operation or image transform that matches a concrete question and its assumptions.',evidence:'State the input, assumptions, parameter choices and interpretation; compare against an appropriate simple baseline.',project:'Establish a documented scientific operation that could later be reused on environmental or image data.'},
      {title:'Communicate and reproduce findings',outcome:'Create labelled plots with units, legends and provenance, save them as files, and rerun the analysis from a documented entry point.',evidence:'A reviewer can identify the measure, sample and main pattern without reading the code; the run instructions reproduce the figures.',project:'Provide interpretable evidence rather than unsupported claims in the larger research project.'}
    ],
    topics:[
      {title:'NumPy arrays and numerical operations',detail:'Learn array construction, shape, dimensions, dtype, indexing, slicing, broadcasting and reductions. Use vectorized arithmetic and boolean masks; be explicit about NaN handling, units, precision and when a Python loop remains clearer.'},
      {title:'Pandas data inspection and cleaning',detail:'Read CSV or other tabular input, inspect `head`, `info`, `describe`, dtypes and missing values, then apply documented conversion, filtering and grouping. Avoid chained assignment and silent coercion; compare row counts and summaries before and after cleaning.'},
      {title:'Matplotlib visual communication',detail:'Choose a chart suited to the comparison or distribution, label axes with units, include a title and legend where needed, and avoid misleading scales. Export figures at a useful resolution and keep plotting code reproducible.'},
      {title:'SciPy fundamentals and assumptions',detail:'Survey a small set of functions for statistics, optimization or signal processing. Choose one method for a stated question, inspect its assumptions and output, and explain what the result does and does not establish.'},
      {title:'OpenCV and image arrays',detail:'Load and inspect image dimensions, channels, dtype and value range; practise one simple operation such as color conversion, thresholding or blur. Preserve spatial meaning where relevant and compare the transformed image with the original.'},
      {title:'Reproducibility and data provenance',detail:'Record source, license or sample origin, units, cleaning rules, random seeds where relevant and environment assumptions. Separate data preparation, analysis and plotting so a rerun produces comparable outputs.'}
    ]
  },
  {
    overview:'Move from ordinary tables to spatial data, where every value is tied to a location and coordinate reference. You will learn how raster grids and vector geometries differ, how GeoTIFF metadata describes a grid, and how CRS, transform, bounds and NoData interact during reprojection and clipping. Rasterio and GDAL make these operations practical, but validation is essential because a file can open while still being spatially wrong. By the end, produce a checked preprocessing result and explain its spatial footprint; this is the first step toward combining satellite inputs in the digital twin.',
    objectives:[
      {title:'Inspect raster and vector structure',outcome:'Read raster dimensions, band count, dtype, CRS, transform, bounds and NoData, and inspect vector geometry types and CRS.',evidence:'Create a metadata summary and identify at least one condition that would make overlay unsafe.',project:'Document input assumptions before preparing a satellite raster.'},
      {title:'Choose and verify a coordinate reference system',outcome:'Distinguish geographic and projected coordinates and select a target CRS appropriate to the study area and measurement.',evidence:'Reproject a raster or vector, then verify CRS, bounds, dimensions and alignment rather than trusting a successful function call.',project:'Place layers in a common, defensible spatial reference for later analysis.'},
      {title:'Clip and export a geospatial raster',outcome:'Use a valid vector geometry to mask or clip a raster and preserve meaningful metadata in a GeoTIFF output.',evidence:'Confirm the output footprint intersects the intended boundary, inspect NoData and reopen the output for validation.',project:'Prepare an analysis-ready raster tile for future model and API workflows.'},
      {title:'Handle geospatial processing failures',outcome:'Detect missing CRS, invalid geometry, empty overlap and unexpected NoData before downstream use.',evidence:'Run at least two intentionally invalid cases and produce actionable errors or a clear processing summary.',project:'Prevent spatially plausible but scientifically invalid inputs from entering the project.'}
    ],
    topics:[
      {title:'Raster and vector data models',detail:'A raster stores values on a grid with bands; vector data stores points, lines or polygons with attributes. Learn when each represents the phenomenon well, and inspect geometry validity, pixel resolution, extent and band meaning.'},
      {title:'GeoTIFF metadata and georeferencing',detail:'Understand width, height, band count, dtype, affine transform, pixel size, bounds and NoData. Learn how the transform maps pixel coordinates to map coordinates and why metadata must survive processing.'},
      {title:'Coordinate reference systems',detail:'Distinguish geographic longitude/latitude from projected coordinates, read EPSG identifiers and WKT, and choose a CRS appropriate to the region and operation. Reprojection changes grid placement and often resolution; it is not a metadata label swap.'},
      {title:'Rasterio and GDAL workflows',detail:'Use Rasterio to inspect, read, mask, reproject and write datasets; understand GDAL as the underlying geospatial toolkit and command-line option. Manage datasets with context managers and set output profile values deliberately.'},
      {title:'Clipping, resampling and validation',detail:'Use a vector boundary in the same CRS as the target raster, choose a resampling method suited to categorical or continuous data, and inspect the resulting transform and NoData. Check empty intersection, invalid geometry and output reopening.'},
      {title:'Satellite preprocessing context',detail:'Recognize that satellite scenes may include multiple bands, quality masks, units, acquisition dates and large extents. Record source, band selection, scale factors and preprocessing steps so later scientific comparisons remain interpretable.'}
    ]
  },
  {
    overview:'Consolidate the first four foundation weeks into a repeatable scientific data pipeline. The key shift is from a notebook or script that works once to explicit stages with defined inputs, outputs, validation rules, configuration and failure behaviour. Reproducibility makes results reviewable; profiling helps improve only the bottleneck that measurements identify. By the end, run the same configured pipeline on a clean sample, verify stable outputs and explain its boundaries. This pipeline becomes a reusable ingestion and preprocessing layer for the backend and agent work ahead.',
    objectives:[
      {title:'Define stage contracts',outcome:'Separate ingest, validate, transform and export so each stage has clear input/output expectations and errors.',evidence:'Call stages independently in tests and show that one malformed stage input is rejected before transformation.',project:'Make data flow through the scientific preprocessing pipeline predictable.'},
      {title:'Validate scientific and geospatial inputs',outcome:'Check required fields, types, ranges, CRS, geometry and NoData conditions using explicit rules.',evidence:'Exercise valid and invalid fixtures and confirm messages identify the failed rule and relevant source.',project:'Protect later API, model and AI layers from untrusted or misaligned data.'},
      {title:'Make execution reproducible through configuration',outcome:'Move paths and meaningful parameters into a configuration object or file; avoid hidden machine-specific assumptions.',evidence:'Run twice with the same inputs/configuration and compare a stable summary or checksum.',project:'Allow teammates and future services to reproduce preprocessing.'},
      {title:'Measure and improve a bottleneck',outcome:'Profile a representative run, identify the most expensive stage and make one evidence-based optimization.',evidence:'Record baseline and after timing under comparable conditions; confirm outputs remain equivalent.',project:'Prepare for larger satellite datasets without premature optimization.'}
    ],
    topics:[
      {title:'Pipeline boundaries and data contracts',detail:'Define stage responsibilities, expected schemas, units and failure outcomes. Pass typed values or explicit result objects between stages; keep orchestration separate from transformation logic.'},
      {title:'Validation strategy',detail:'Validate early at file and stage boundaries, distinguish warnings from errors, and make checks specific to the data domain. Include schema, numeric range, CRS, geometry and output integrity as appropriate.'},
      {title:'Configuration and reproducibility',detail:'Represent paths, target CRS, selected bands and thresholds in a versionable configuration. Keep environment-specific secrets out of config, log effective non-sensitive settings and record input identifiers.'},
      {title:'Testing scientific workflows',detail:'Use small fixtures with known outputs, test each stage and test end-to-end handoffs. Include malformed data, empty inputs and spatial edge cases; verify error messages as well as successful results.'},
      {title:'Profiling and performance',detail:'Measure wall time and memory on a representative sample, locate the actual slow stage and change one factor at a time. Preserve correctness checks and report the conditions of each measurement.'},
      {title:'Logging and operational summaries',detail:'Log stage start/end, counts, elapsed time and relevant identifiers without exposing sensitive content. Produce a concise run summary that reports inputs, outputs, warnings and failures.'}
    ]
  },
  {
    overview:'Translate the data-processing foundation into a network service with a clear HTTP contract. You will connect client/server request flow to REST resource design, JSON schemas, status codes and FastAPI routing. These concepts matter because other applications and teammates need a stable way to submit, retrieve and inspect observations. By week end, expose a tested API that validates input and communicates success and failure consistently; this becomes the service boundary for later database, authentication and AI features.',
    objectives:[
      {title:'Explain an HTTP exchange',outcome:'Identify method, path, headers, body, status code and response body in a client/server interaction.',evidence:'Use a browser, curl or API client to make a request and explain the returned status and JSON.',project:'Make the analyzer\'s data and health state accessible through a predictable service interface.'},
      {title:'Design resource-oriented endpoints',outcome:'Choose routes and HTTP methods for listing, retrieving, creating and summarizing observations without conflating actions and resources.',evidence:'Document endpoint purpose, parameters, response shape and expected status codes.',project:'Expose observation access that later clients and the digital-twin interface can consume.'},
      {title:'Implement typed validation and responses',outcome:'Use FastAPI and Pydantic models to validate request bodies and serialize a consistent response schema.',evidence:'Test valid requests, missing fields, wrong types, unknown IDs and malformed JSON behavior.',project:'Keep invalid observations from silently entering the backend.'},
      {title:'Verify and document the service',outcome:'Run the API locally, inspect generated OpenAPI docs and write a short request walkthrough.',evidence:'A clean run sequence and curl examples reproduce one successful response and one failure response.',project:'Provide a reliable starting point for database and authentication integration.'}
    ],
    topics:[
      {title:'Client/server architecture and HTTP',detail:'Understand how clients address a server and how requests and responses carry method, path, headers, body and status. Distinguish transport success from application-level correctness.'},
      {title:'REST resources and HTTP methods',detail:'Model nouns such as observations and collections as resources. Use GET for retrieval, POST for creation or processing requests, PUT/PATCH for updates and DELETE only where supported; keep semantics and repeatability in mind.'},
      {title:'Status codes and JSON contracts',detail:'Use appropriate 2xx, 4xx and 5xx responses, including not found, validation failure and unexpected server error. Define stable JSON fields, types and error shapes rather than returning ad hoc dictionaries.'},
      {title:'FastAPI routing and Pydantic',detail:'Create route functions, path/query/body parameters, request and response models, dependency basics and automatic OpenAPI documentation. Keep routing thin and delegate business logic to reusable functions.'},
      {title:'Validation, pagination and filtering',detail:'Validate required values and types at the API boundary; implement a small filter and bounded pagination contract. Avoid returning an unbounded collection as the dataset grows.'},
      {title:'API testing and request tools',detail:'Use FastAPI\'s test client or curl to exercise normal and failure paths. Inspect headers, status and response body, and document commands that another learner can run.'}
    ]
  },
  {
    overview:'Give the API durable, queryable storage by learning relational design and connecting PostgreSQL through SQLAlchemy and migrations. The week links entities and constraints to SQL joins, transactions and application persistence; each layer should preserve the same data rules. Indexes matter when they serve a query pattern, not as decoration. By the end, a clean database can be created from migrations, the service can persist observations and tests can prove both successful writes and rollback behaviour. This database becomes the shared foundation for users, jobs and retrieval data later in the roadmap.',
    objectives:[
      {title:'Design a relational schema',outcome:'Identify entities, primary keys, foreign keys, uniqueness and nullable fields for users, locations and observations.',evidence:'Draw a small ER diagram and explain one constraint that prevents invalid records.',project:'Represent observations and their spatial/source context without duplicating facts unnecessarily.'},
      {title:'Write useful SQL queries',outcome:'Use SELECT, filtering, joins, grouping and aggregates to answer a concrete observation question.',evidence:'Run a join-based summary query and explain how its result changes when a related row is absent.',project:'Support filtered observation retrieval and scientific summaries.'},
      {title:'Persist through SQLAlchemy and migrations',outcome:'Map core tables to SQLAlchemy models, manage sessions/transactions and generate an Alembic migration.',evidence:'Create an empty database, apply migrations and perform CRUD through the service.',project:'Make the backend repeatably deployable instead of relying on in-memory data.'},
      {title:'Protect data integrity and test rollback',outcome:'Use constraints and transaction boundaries to ensure incomplete operations do not leave partial data.',evidence:'Test foreign-key rejection and a deliberately rolled-back operation using an isolated test database.',project:'Preserve trustworthy scientific records when API requests or processing fail.'}
    ],
    topics:[
      {title:'Relational modelling and keys',detail:'Identify entities, attributes, candidate keys and relationships. Use primary keys for identity, foreign keys for relationships, and uniqueness/check constraints for invariants the database must enforce.'},
      {title:'SQL querying and joins',detail:'Practise SELECT, WHERE, ORDER BY, aggregation, GROUP BY and inner/outer joins. Reason about duplicates and missing related rows; express a useful observation-by-location or date summary.'},
      {title:'Indexes and query plans',detail:'Learn how a B-tree index can accelerate a matching filter or join while adding write and storage cost. Inspect a query plan for one representative query and justify the chosen index from its access pattern.'},
      {title:'Transactions and isolation basics',detail:'Understand atomic commit/rollback and why related writes belong in one transaction. Observe how failed operations are rolled back and avoid assuming that a multi-step workflow is atomic by default.'},
      {title:'SQLAlchemy models and sessions',detail:'Map tables and relationships, create sessions, add/query/update records and close resources reliably. Keep persistence logic behind a repository or service boundary where it improves clarity.'},
      {title:'Alembic migrations and database tests',detail:'Generate and review schema migrations, apply them forward and understand revision history. Test against an isolated database, reset state reliably, and verify constraints and transaction behaviour.'}
    ]
  },
  {
    overview:'Add identity and access boundaries to the backend without treating login as a UI-only feature. The week follows credentials from safe password storage through authentication, token/session handling and authorization checks on specific resources. Middleware and environment configuration support those boundaries, while tests expose missing or incorrect protections. By the end, only an authenticated, authorized user should access their protected data, and secrets should never live in source code. This makes the API safe enough to extend with user-owned project and document workflows.',
    objectives:[
      {title:'Separate authentication from authorization',outcome:'Explain how identity verification differs from deciding what an identified user may do.',evidence:'Implement a protected route and an ownership check; test both unauthenticated and wrong-owner access.',project:'Ensure observations or later documents are scoped to the correct user.'},
      {title:'Store and verify credentials safely',outcome:'Use a maintained password hashing library and compare submitted credentials without storing plaintext passwords.',evidence:'Inspect persisted user records and verify that passwords are one-way hashes with appropriate parameters.',project:'Protect project-user accounts and reduce the impact of a database leak.'},
      {title:'Issue and validate an authentication mechanism',outcome:'Implement short-lived signed tokens or sessions with expiry and configuration-driven secrets.',evidence:'Test valid, expired, malformed and missing credentials; show secrets are loaded from environment configuration.',project:'Allow clients to call protected API routes while keeping identity checks server-side.'},
      {title:'Review common security failures',outcome:'Apply request validation and basic security middleware and describe brute-force, token theft, secret rotation and ownership risks.',evidence:'Produce a brief threat review and tests for the selected failure cases.',project:'Establish a security baseline before adding agents, file uploads and deployment.'}
    ],
    topics:[
      {title:'Identity, authentication and authorization',detail:'Authentication establishes who is making a request; authorization evaluates the action on a resource. Model roles or ownership explicitly and deny by default when identity or policy is missing.'},
      {title:'Password storage and login flows',detail:'Hash passwords with a maintained password-hashing algorithm and verify them through its comparison function. Avoid reversible encryption or plaintext storage; consider generic login errors and basic rate limiting.'},
      {title:'JWT, sessions and expiry',detail:'Understand signed claims, token lifetime, issuer/audience checks and revocation trade-offs; compare bearer tokens with server-side sessions. Keep token payloads free of secrets and sensitive data.'},
      {title:'Middleware and request security',detail:'Use middleware or dependencies for cross-cutting identity and request concerns. Validate inputs, apply safe response headers and ensure protected routes do not accidentally bypass checks.'},
      {title:'Environment and secret handling',detail:'Load secrets and environment-specific settings outside committed source. Validate required configuration at startup, restrict exposure in logs and plan rotation without revealing values.'},
      {title:'Threat modelling and security tests',detail:'Review credential stuffing, brute force, token theft, broken object-level authorization and information leakage. Test missing, expired, malformed and cross-user requests, not only the happy login path.'}
    ]
  },
  {
    overview:'Build a grounded mental model of language-model applications before adding agents. You will connect tokens and context limits to inference, compare hosted and local model trade-offs, and wrap providers behind a consistent application interface. Structured output and failure handling turn variable model text into something a backend can validate. By the end, compare a hosted API with Ollama on the same task and explain the trade-offs in quality, latency, privacy and cost. This provider boundary will support later tool use and retrieval without coupling the product to one model.',
    objectives:[
      {title:'Explain model inputs and constraints',outcome:'Describe tokens, context windows, inference and why model outputs are probabilistic and bounded by the supplied context.',evidence:'Estimate prompt size, identify truncation risk and explain one observed variation across repeated calls.',project:'Choose suitable context and response constraints for agricultural questions.'},
      {title:'Integrate hosted and local providers',outcome:'Call one hosted model API and one Ollama model through a shared typed provider interface.',evidence:'Run the same prompt through both adapters and record model/version, latency, errors and a qualitative comparison.',project:'Keep the digital-twin assistant flexible across privacy and availability needs.'},
      {title:'Validate structured model output',outcome:'Request a structured response and validate it against a schema before downstream code uses it.',evidence:'Handle valid output, malformed JSON, timeout and unavailable-provider cases with explicit outcomes.',project:'Prevent unvalidated model text from becoming trusted application state.'},
      {title:'Make a reasoned model-selection decision',outcome:'Compare quality, latency, privacy, operating cost and context capacity for a stated use case.',evidence:'Write a short selection note with evidence and identify what would cause the decision to change.',project:'Document a defensible model boundary for subsequent agent and RAG work.'}
    ],
    topics:[
      {title:'Transformers, tokens and context',detail:'Build a conceptual picture of transformer-based next-token generation without requiring implementation of the model itself. Learn tokenization, prompt plus completion context, context-window limits and why long context increases cost and may reduce focus.'},
      {title:'Inference and model families',detail:'Distinguish hosted closed models, open-weight models and local inference. Understand that weights, serving software and API access are separate concerns; compare availability, privacy, control and operational burden.'},
      {title:'Hosted model APIs',detail:'Use a provider API with timeouts, request IDs and explicit response parsing. Keep credentials server-side, handle rate limits and provider errors, and avoid depending on undocumented response fields.'},
      {title:'Ollama and local inference',detail:'Install and run a local model through Ollama, select a suitable model size for available hardware, and inspect latency and memory constraints. Treat local serving as a dependency that can be unavailable or slower.'},
      {title:'Structured output and schema checks',detail:'Use constrained/structured response features where available, then validate the returned fields and types in application code. Design a repair or failure path rather than assuming valid JSON.'},
      {title:'Model evaluation and selection',detail:'Compare outputs against a small shared prompt set and assess correctness, completeness, latency, privacy and cost. Record model/version and evaluation conditions so the choice can be revisited.'}
    ]
  },
  {
    overview:'Move from a model that only replies to a bounded agent that can choose and invoke approved application functions. The week connects tool schemas, model requests, an agent loop and application-side validation; the model proposes actions, but the application decides what is allowed and executes the real work. This boundary matters because model-generated arguments can be wrong and tool side effects can be consequential. By the end, a scientific assistant should call a small allowlist of read-focused Python tools, surface results and errors, and stop predictably. It provides the controlled action layer for the digital twin.',
    objectives:[
      {title:'Define typed tool contracts',outcome:'Describe each tool\'s name, purpose, argument schema, return shape and failure modes.',evidence:'Reject missing, extra or wrong-typed arguments before execution and show a valid invocation.',project:'Expose only the small scientific operations the assistant needs.'},
      {title:'Implement a bounded agent loop',outcome:'Process a model tool-call request, execute an allowlisted function, return its result and stop after a configured iteration limit.',evidence:'Demonstrate a successful tool call, a multi-step call and a loop-limit stop.',project:'Answer scientific questions with computed data instead of fabricated calculations.'},
      {title:'Enforce permissions and handle errors',outcome:'Keep tools least-privileged, distinguish read operations from writes, and define when human approval is required.',evidence:'Test malformed arguments, tool exceptions and an attempted disallowed action; log the action and outcome.',project:'Protect datasets and users from unsafe or unintended agent actions.'},
      {title:'Explain the harness boundary',outcome:'Separate model instructions, tool definitions, orchestration, execution and application policy.',evidence:'Trace one request through each layer and explain which component has authority to perform the operation.',project:'Create an auditable harness that can later use retrieval and orchestration frameworks.'}
    ],
    topics:[
      {title:'Function calling and tool schemas',detail:'Understand that tool calling is a structured request from a model, not execution by the model itself. Define names, descriptions, JSON-compatible argument types, required fields and return data that can be safely serialized.'},
      {title:'Agent loop and state transitions',detail:'Implement the cycle of user request, model response, tool call, application execution and follow-up model response. Bound iterations, track messages and tool results, and define a clear final-answer condition.'},
      {title:'Validation and failure handling',detail:'Validate tool arguments independently of model output. Return typed success/error results, avoid leaking stack traces, and decide when to retry, ask the user or stop.'},
      {title:'Permissions and human approval',detail:'Use an allowlist and least privilege; distinguish read-only analysis from file writes, external calls or destructive changes. Put explicit approval gates around operations with side effects.'},
      {title:'Instructions and prompt boundaries',detail:'Write tool descriptions and system instructions that state capabilities, limits and output expectations. Treat retrieved or user-supplied text as data, not policy that can expand tool access.'},
      {title:'Tracing and auditability',detail:'Record request correlation, selected tool, validated arguments, execution outcome and latency while avoiding sensitive payload exposure. Make it possible to reconstruct why the harness chose a result.'}
    ]
  },
  {
    overview:'Give the assistant access to a curated body of agricultural knowledge with evidence attached to answers. The week connects document preparation and chunking to embeddings, vector similarity, retrieval, prompt assembly and citation checks; memory introduces the separate problem of retaining useful conversation state. RAG reduces reliance on model recall but does not guarantee relevance or truth, so inspect retrieval and handle no-evidence cases explicitly. By the end, answer representative research questions with traceable passages from a small corpus and show when the corpus cannot support an answer. This grounds the digital twin in inspectable research sources.',
    objectives:[
      {title:'Prepare a retrievable document corpus',outcome:'Normalize a small set of research documents, preserve source metadata and split text into chunks suited to the domain.',evidence:'Inspect chunks for broken sentences, missing source identifiers and excessive or undersized context.',project:'Create a traceable evidence collection for agricultural research responses.'},
      {title:'Embed and retrieve relevant passages',outcome:'Generate embeddings, store vectors and metadata in pgvector, and retrieve top-k candidates with a similarity threshold.',evidence:'Run representative queries, inspect ranked passages and explain one relevant and one poor retrieval result.',project:'Find evidence that can support a drought or agrometeorology answer.'},
      {title:'Generate grounded answers with citations',outcome:'Pass retrieved evidence to a model and format answers with source references; abstain or report no evidence when retrieval is insufficient.',evidence:'Test a supported question and a no-match question and verify citations point to retrieved source passages.',project:'Make assistant claims reviewable by a user or researcher.'},
      {title:'Distinguish retrieval, memory and compaction',outcome:'Explain how external knowledge retrieval differs from conversation memory and how context compaction preserves selected state.',evidence:'Demonstrate a short conversation that retains a needed preference while avoiding unrelated history.',project:'Keep the assistant useful over longer research interactions without treating all history as knowledge.'}
    ],
    topics:[
      {title:'Document ingestion and chunking',detail:'Extract text while preserving titles, authors, dates, URLs and section metadata. Choose chunk size and overlap based on document structure; inspect chunks to ensure evidence is coherent and attributable.'},
      {title:'Embeddings and semantic similarity',detail:'Understand embeddings as vector representations that support semantic comparison, not as truth scores. Compare similar and unrelated queries and inspect how wording, domain terms and chunk content affect nearest neighbors.'},
      {title:'Vector storage and pgvector',detail:'Store vectors with chunk text and source metadata, select an appropriate distance operator and index when useful, and retrieve top-k candidates. Apply a threshold carefully and inspect database results.'},
      {title:'Retrieval-augmented generation',detail:'Assemble a bounded prompt from the user question and selected evidence, instruct the model to cite supplied sources and validate citation identifiers. Treat missing or conflicting evidence explicitly.'},
      {title:'Memory and context compaction',detail:'Separate durable user preferences or task state from retrieved reference documents and raw conversation history. Summarize only information needed for future turns; verify important facts survive compaction.'},
      {title:'RAG evaluation and abstention',detail:'Build representative questions with expected sources, inspect precision and missed evidence, and test no-match or conflicting-source cases. Do not equate fluent generation with successful retrieval.'}
    ]
  },
  {
    overview:'Combine model calls, retrieval and scientific tools into a workflow whose state and failure behaviour can be inspected. LangGraph provides a way to express nodes, transitions and conditional routing, while evaluation asks whether each stage produced supported, useful results. Retries and observability help diagnose transient failures but must be bounded to prevent loops and hide neither errors nor costs. By the end, route different request types through an evaluated workflow and record failure cases. This is the point where the AI feature becomes a tested application workflow rather than a prompt demo.',
    objectives:[
      {title:'Model workflow state and graph transitions',outcome:'Define typed state fields and nodes for request classification, retrieval, optional scientific tools, drafting and answer validation.',evidence:'Trace at least two paths through the graph and explain the condition that selects each branch.',project:'Route agricultural literature and numeric-analysis requests to the right evidence source.'},
      {title:'Add bounded retries and observability',outcome:'Retry only selected transient failures, set maximum attempts and expose useful stage outcomes and timings.',evidence:'Inject a recoverable and a permanent error; prove retries stop and leave an actionable trace.',project:'Keep the assistant recoverable without creating invisible repeated model/tool calls.'},
      {title:'Evaluate quality with explicit cases',outcome:'Create a small evaluation set and score evidence relevance, citation support, tool correctness and answer completeness.',evidence:'Record expected evidence, actual output, pass/fail reason and at least one limitation.',project:'Measure whether the integrated AI workflow meets its intended research use.'},
      {title:'Test hallucination and workflow failure modes',outcome:'Exercise missing retrieval evidence, malformed model output, tool error and conflicting sources.',evidence:'Show safe abstention or a clear failure response for each injected case.',project:'Prevent unsupported responses from appearing reliable in the digital-twin interface.'}
    ],
    topics:[
      {title:'LangGraph nodes and state',detail:'Represent each operation as a node over explicit state and define which fields it reads or updates. Keep state typed, small and serializable where persistence or debugging requires it.'},
      {title:'Routing and multi-step orchestration',detail:'Use conditional edges to route literature questions to retrieval and numeric questions to a scientific tool. Define terminal paths and ensure each transition has a reason and bounded path length.'},
      {title:'Retries and recovery policy',detail:'Separate transient provider/network failures from invalid inputs and deterministic tool errors. Apply bounded retry counts and backoff only where safe; preserve the original failure for diagnosis.'},
      {title:'Evaluation datasets and criteria',detail:'Write a small stable set of user requests, expected evidence and tool requirements. Score relevance, support, citation correctness and action correctness; retain examples that expose failure.'},
      {title:'Hallucination and citation checks',detail:'Check whether claims are supported by retrieved passages or computed tool outputs. Test unsupported questions and conflicting sources, and abstain instead of filling gaps with plausible prose.'},
      {title:'Observability and workflow traces',detail:'Capture node transitions, latency, retries, tool outcomes and relevant identifiers. Use traces to locate whether failure came from routing, retrieval, tool execution or generation.'}
    ]
  },
  {
    overview:'Build practical systems intuition by measuring how work behaves across processes, threads and asynchronous I/O. The concepts connect execution model to workload: CPU-bound computation, I/O waiting, shared state, network latency and transaction boundaries create different bottlenecks. Caching can reduce repeated reads but introduces invalidation and staleness concerns. By the end, compare execution modes on controlled workloads, verify equivalent outputs and justify an approach from measurements. These skills prepare the project to process larger satellite data and serve concurrent requests reliably.',
    objectives:[
      {title:'Distinguish concurrency and parallelism',outcome:'Explain processes, threads, concurrency, parallel execution, synchronous work and asynchronous I/O in terms of what can overlap and what can run simultaneously.',evidence:'Classify one CPU-bound and one network/I/O-bound workload and predict a reasonable execution strategy.',project:'Choose an execution model for scientific processing and backend request handling.'},
      {title:'Benchmark competing execution models',outcome:'Run sequential, threaded and process-based versions of one representative workload using controlled input sizes.',evidence:'Report repeated timing and memory measurements and calculate a summary such as the median.',project:'Provide evidence for or against parallelizing a project processing stage.'},
      {title:'Preserve correctness under concurrent work',outcome:'Identify shared state, ordering assumptions and transaction boundaries that can cause races or partial results.',evidence:'Verify outputs are equivalent across modes and describe how one unsafe shared update would be avoided.',project:'Prevent corrupted or inconsistent observation and job state.'},
      {title:'Explain caching trade-offs',outcome:'Describe cache hit/miss behaviour, key choice, expiry and invalidation for one read-heavy path.',evidence:'Measure a simple hit/miss scenario and state what stale result risk remains.',project:'Improve repeated metadata or summary reads without compromising scientific freshness.'}
    ],
    topics:[
      {title:'Processes, threads and the runtime',detail:'Understand separate process memory versus shared-memory threads, startup and communication costs, and how the language runtime affects CPU-bound parallelism. Choose the simplest model that fits the workload.'},
      {title:'Concurrency versus parallelism',detail:'Concurrency structures overlapping tasks; parallelism executes work simultaneously on multiple cores. Distinguish these goals from implementation details and measure end-to-end time rather than assuming more workers is faster.'},
      {title:'Async I/O and networking',detail:'Use asynchronous execution when tasks spend time waiting on network or other I/O and the libraries support it. Understand await points, event-loop blocking and why CPU-heavy work may need a process or worker.'},
      {title:'Shared state and database transactions',detail:'Identify race conditions, locking needs and non-atomic read/modify/write sequences. Use database transactions to protect related updates and keep long-running compute outside transaction locks where possible.'},
      {title:'Caching fundamentals',detail:'Choose cache keys, expiry and invalidation rules; distinguish cached derived results from source-of-truth records. Consider stale data, memory limits and whether repeated access justifies caching.'},
      {title:'Benchmark design and interpretation',detail:'Use representative datasets, repeat runs, record environment and compare median times and memory. Keep output checks, separate warm-up from measurement where relevant, and state uncertainty and limits.'}
    ]
  },
  {
    overview:'Move long-running work out of request/response paths and make it observable as a durable job. Redis introduces shared in-memory state for queue and cache patterns; a worker performs processing independently while the API reports progress. Idempotency, retries and failure states make this safe when clients repeat requests or dependencies fail. By the end, submit a satellite-processing job, track it through a worker and safely retry a simulated failure. This architecture is essential for workloads that exceed a web request\'s practical lifetime.',
    objectives:[
      {title:'Design an asynchronous job lifecycle',outcome:'Define job identifiers and states such as queued, running, succeeded and failed, including which transitions are allowed.',evidence:'Submit a job and query its status through each observable state.',project:'Let users track satellite preprocessing without holding an HTTP request open.'},
      {title:'Use Redis-backed queue and cache patterns',outcome:'Connect an API to a worker through a queue and define one explicit cache use case with expiry or invalidation.',evidence:'Demonstrate a queued job being consumed and compare cache hit/miss behaviour.',project:'Support scalable processing and repeated metadata reads.'},
      {title:'Make tasks idempotent and retry safely',outcome:'Use an idempotency key or deterministic job identity and bounded retries with backoff for transient errors.',evidence:'Prove duplicate submission does not duplicate work and show permanent errors stop retrying.',project:'Prevent duplicate processing and runaway retries in the satellite pipeline.'},
      {title:'Expose failures for operators and users',outcome:'Store useful failure state and sanitized diagnostic context while preserving logs for investigation.',evidence:'Simulate transient and permanent failures and verify status, retry count and actionable message.',project:'Make background processing supportable rather than a hidden black box.'}
    ],
    topics:[
      {title:'Redis data and cache basics',detail:'Understand Redis keys, values, expiry and common access patterns. Use it for a specific cache or broker role, not as an unexamined replacement for durable relational records.'},
      {title:'Queues, workers and message flow',detail:'Separate job submission from execution, define message payloads and build a worker that acknowledges completion or failure. Consider queue durability, visibility timeout and what happens when a worker exits.'},
      {title:'Job state and progress reporting',detail:'Persist or otherwise reliably expose job identity, status, timestamps and result reference. Define legal transitions and make status endpoints safe to poll.'},
      {title:'Idempotency and duplicate delivery',detail:'Assume clients or brokers may deliver a request more than once. Use idempotency keys and durable state checks so repeated processing does not create duplicate outputs or side effects.'},
      {title:'Retry, backoff and dead-letter handling',detail:'Retry transient failures with bounded attempts and delay; do not retry invalid input indefinitely. Preserve terminal errors and expose them for diagnosis or operator action.'},
      {title:'Cache invalidation and consistency',detail:'Specify what is cached, how long it may be stale and what event invalidates it. Measure hits and misses and ensure updated scientific results cannot be confused with older cached output.'}
    ]
  },
  {
    overview:'Package the application so another environment can build, run, inspect and recover it. Docker and Compose make services reproducible locally; CI verifies changes; deployment introduces real configuration, logs, monitoring and rollback needs. The topics connect code quality to operational evidence: a passing local run is not enough if the deployed service is unhealthy or secrets are exposed. By the end, deploy a containerized application and verify its critical path, health and recovery instructions. This turns the roadmap project into a usable engineering product.',
    objectives:[
      {title:'Build reproducible containers',outcome:'Create lean Docker images and a Compose stack for API, database and worker with health checks and persistent local storage.',evidence:'Build and start from a clean checkout and verify each service\'s health and dependencies.',project:'Make the digital-twin service easy to run consistently across machines.'},
      {title:'Automate quality checks in CI',outcome:'Configure a pipeline to install dependencies, run lint/type checks/tests and build images on a clean change.',evidence:'Show a passing run and one intentionally failing check that blocks the pipeline.',project:'Catch regressions before they reach deployment.'},
      {title:'Deploy and operate the service',outcome:'Deploy to a chosen host with environment-managed configuration, structured logs and basic health/monitoring signals.',evidence:'Verify a live health endpoint and one end-to-end processing path; inspect logs for a request.',project:'Make project capabilities accessible beyond a development laptop.'},
      {title:'Plan secrets, backup and rollback',outcome:'Keep secrets out of images and source, document backup/restore and identify a safe rollback path.',evidence:'Review repository/image/config for accidental credentials and rehearse a documented recovery step.',project:'Protect users and data when releases or infrastructure fail.'}
    ],
    topics:[
      {title:'Docker images and container lifecycle',detail:'Learn Dockerfiles, build context, layers, image tags and container lifecycle. Use a suitable base image, non-root execution where feasible, explicit dependencies and a reproducible startup command.'},
      {title:'Docker Compose and service health',detail:'Describe API, worker, database and Redis services, their networks, volumes and environment configuration. Add health checks and understand startup dependencies without assuming readiness from process launch.'},
      {title:'CI/CD and release confidence',detail:'Run tests and quality checks from a clean checkout, build images and preserve actionable logs. Separate continuous integration evidence from deployment promotion and define what must pass before release.'},
      {title:'Cloud deployment and configuration',detail:'Choose a host suitable for the project, configure environment variables and database connectivity, apply migrations and verify the deployed service. Record URL, resource assumptions and limits.'},
      {title:'Logging, monitoring and health',detail:'Emit structured request and worker logs with correlation identifiers and no secrets. Use health checks and basic resource/error signals to detect unavailable dependencies or repeated failures.'},
      {title:'Secrets, backup and rollback',detail:'Keep credentials in a secret manager or protected environment configuration, rotate when needed and avoid logging them. Document persistent data backup, restore and release rollback steps.'}
    ]
  },
  {
    overview:'Prove that your backend and AI skills transfer to a new domain by starting a separate document workflow product. The week compresses product scoping, schema and API design, upload safety, background processing, AI summarization and deployment into one independent build. The challenge is to connect these pieces while keeping authorization, file limits, job status and model failure behaviour explicit. By the end, a user should be able to authenticate, upload a document, track processing and retrieve a summary in a deployed environment. This is a portfolio proof that the skills are not tied only to the agricultural project.',
    objectives:[
      {title:'Scope and design the product before coding',outcome:'Define a narrow user flow, document/job data model, API contract and service boundaries for the independent application.',evidence:'Produce a simple architecture sketch and acceptance checklist before implementation.',project:'Keep the week deliverable achievable and demonstrably independent of the main project.'},
      {title:'Implement secure document workflows',outcome:'Build authenticated upload, list, status and download endpoints with file type/size limits and per-user ownership checks.',evidence:'Test valid upload, rejected file, unauthorized access and cross-user access attempts.',project:'Protect private documents through the entire lifecycle.'},
      {title:'Process and summarize asynchronously',outcome:'Queue extraction and AI summarization, persist job states and make repeated submissions safe.',evidence:'Show successful processing, provider failure and duplicate submission behaviour.',project:'Deliver useful summaries without blocking requests or losing job state.'},
      {title:'Deploy and demonstrate a complete flow',outcome:'Run tests against PostgreSQL, deploy the application and document setup and user-facing limitations.',evidence:'Complete upload-to-summary demo from the deployed environment and link the result to its source document.',project:'Demonstrate transferable backend and AI application engineering.'}
    ],
    topics:[
      {title:'Product scope and workflow modelling',detail:'Choose a specific user and small end-to-end flow; distinguish must-have acceptance criteria from later enhancements. Sketch states and failure points before implementation.'},
      {title:'Document schema and API design',detail:'Model users, documents and processing jobs with ownership and lifecycle state. Define authenticated upload, list, status and download contracts with correct validation and response codes.'},
      {title:'Secure file upload and storage',detail:'Enforce file size and allowed type limits, generate safe storage names, avoid trusting user-supplied paths and keep private files behind authorization. Consider retention and cleanup.'},
      {title:'Background extraction and AI summarization',detail:'Extract text in a worker, track job state and call a provider through an application boundary. Handle empty or unsupported content, provider errors and retries without losing the original document.'},
      {title:'Testing and user isolation',detail:'Test success, invalid files, authorization, ownership, job failure and repeat submission. Exercise persistence against PostgreSQL and verify users cannot enumerate or fetch another user\'s documents.'},
      {title:'Deployment and demo readiness',detail:'Containerize the services, deploy and verify health, then prepare a short user journey with known limitations. Document configuration and do not expose document contents or provider secrets in logs.'}
    ]
  },
  {
    overview:'Bring the minor project to a coherent release candidate and practise explaining it as an engineer. Integration connects data ingestion, geospatial processing, backend persistence, AI workflow and interface behaviour into one chosen user journey. Testing, documentation, diagrams, deployment checks and failure review provide evidence that the pieces work together. The technical defence is not a memorized pitch: it is the ability to state requirements, alternatives, evidence, trade-offs and future improvements. By the end, deliver a demonstrable project and explain its architecture, limitations and recovery choices with confidence.',
    objectives:[
      {title:'Integrate and verify one end-to-end path',outcome:'Select a valuable user flow and connect input selection, processing, persistence, AI assistance and result presentation.',evidence:'Run the flow in the deployed environment and capture expected outputs plus any blockers.',project:'Show the coupled GEO–LEO digital twin as a working system rather than separate components.'},
      {title:'Test critical behaviour and failure recovery',outcome:'Cover critical API, database, geospatial and AI paths and inject at least one dependency failure.',evidence:'Provide a test report and demonstrate a useful error, retry, rollback or recovery behaviour.',project:'Establish confidence that important failures do not silently corrupt or mislead.'},
      {title:'Prepare operational and architecture documentation',outcome:'Write setup/operations instructions, architecture and data-flow diagrams, known limitations and release/rollback steps.',evidence:'A new reader can understand the main data path and follow the documented run or recovery procedure.',project:'Make the project maintainable and reviewable by teammates or interviewers.'},
      {title:'Defend technical decisions',outcome:'Explain key choices using requirements, alternatives, evidence, trade-offs and a reasonable next improvement.',evidence:'Rehearse a five-minute demo and answer questions on three decisions without claiming unsupported results.',project:'Demonstrate independent engineering judgement and readiness for technical interviews.'}
    ],
    topics:[
      {title:'End-to-end integration and contracts',detail:'Trace data across service boundaries, check schemas and error contracts, and select one coherent user path. Resolve configuration and version mismatches that unit tests may not expose.'},
      {title:'Acceptance, regression and failure testing',detail:'Prioritize critical paths and realistic failure injection: missing data, database unavailability, invalid geospatial input, model timeout or worker failure. Verify visible recovery and prevent regressions.'},
      {title:'Architecture and data-flow diagrams',detail:'Show components, trust boundaries, synchronous and asynchronous paths, persistent stores and external dependencies. Keep diagrams consistent with the deployed system and label important assumptions.'},
      {title:'Operations and release readiness',detail:'Document startup, migrations, health checks, logs, backup, rollback and known limitations. Verify configuration and deployment state before calling the build a release candidate.'},
      {title:'Technical decision defence',detail:'For each major decision, state the requirement, alternatives, selection rationale, evidence, trade-offs and what could change the decision. Distinguish measured facts from assumptions.'},
      {title:'Demonstration and interview practice',detail:'Prepare a concise demo that follows a user outcome, not a tour of code. Practise explaining one failure and three decisions, acknowledge limitations and propose a concrete next step.'}
    ]
  }
];
