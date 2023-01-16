import { Icon } from "./types/Icon";
function icon(name: string): Icon {
  return {
    [`_f_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

function iconGeneric(name: string): Icon {
  return {
    [`_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}
function folderIcon(name: string): Icon {
  return {
    [`_fd_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

const icons: Icon = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...folderIcon("folder_app"),
  ...folderIcon("folder_app_open"),
  ...folderIcon("folder_android"),
  ...folderIcon("folder_android_open"),
  ...folderIcon("folder_src"),
  ...folderIcon("folder_src_open"),
  ...folderIcon("folder_component"),
  ...folderIcon("folder_component_open"),
  ...folderIcon("folder_api"),
  ...folderIcon("folder_api_open"),
  ...folderIcon("folder_typescript"),
  ...folderIcon("folder_typescript_open"),
  ...folderIcon("folder_node"),
  ...folderIcon("folder_node_open"),
  ...folderIcon("folder_apollo"),
  ...folderIcon("folder_apollo_open"),
  ...folderIcon("folder_angular"),
  ...folderIcon("folder_angular_open"),
  ...folderIcon("folder_audio"),
  ...folderIcon("folder_audio_open"),
  ...folderIcon("folder_aurelia"),
  ...folderIcon("folder_aurelia_open"),
  ...folderIcon("folder_aws"),
  ...folderIcon("folder_aws_open"),
  ...folderIcon("folder_azure"),
  ...folderIcon("folder_azure_open"),
  ...folderIcon("folder_images"),
  ...folderIcon("folder_images_open"),
  ...folderIcon("folder_asset"),
  ...folderIcon("folder_asset_open"),
  ...folderIcon("folder_css"),
  ...folderIcon("folder_css_open"),
  ...folderIcon("folder_dist"),
  ...folderIcon("folder_dist_open"),
   ...folderIcon("folder_modal"),
  ...folderIcon("folder_modal_open"),
  ...folderIcon("folder_model"),
  ...folderIcon("folder_model_open"),
   ...folderIcon("folder_moon"),
  ...folderIcon("folder_moon_open"),
  ...folderIcon("folder_config"),
  ...folderIcon("folder_config_open"),
  ...folderIcon("folder_context"),
  ...folderIcon("folder_context_open"),
  ...folderIcon("folder_cypress"),
  ...folderIcon("folder_cypress_open"),
  ...folderIcon("folder_git"),
  ...folderIcon("folder_git_open"),
  ...folderIcon("folder_github"),
  ...folderIcon("folder_github_open"),
  ...folderIcon("folder_gitlab"),
  ...folderIcon("folder_gitlab_open"),
  ...folderIcon("folder_vscode"),
  ...folderIcon("folder_vscode_open"),
  ...folderIcon("folder_webpack"),
  ...folderIcon("folder_webpack_open"),
  ...folderIcon("folder_view"),
  ...folderIcon("folder_view_open"),
  ...folderIcon("folder_video"),
  ...folderIcon("folder_video_open"),
  ...folderIcon("folder_tools"),
  ...folderIcon("folder_tools_open"),
  ...folderIcon("folder_utils"),
  ...folderIcon("folder_utils_open"),
  ...folderIcon("folder_theme"),
  ...folderIcon("folder_theme_open"),
  ...folderIcon("folder_temp"),
  ...folderIcon("folder_temp_open"),
  ...folderIcon("folder_template"),
  ...folderIcon("folder_template_open"),
  ...folderIcon("folder_svg"),
  ...folderIcon("folder_svg_open"),
  ...folderIcon("folder_layout"),
  ...folderIcon("folder_layout_open"),
  ...folderIcon("folder_library"),
  ...folderIcon("folder_library_open"),
  ...folderIcon("folder_i18n"),
  ...folderIcon("folder_i18n_open"),
  ...folderIcon("folder_database"),
  ...folderIcon("folder_database_open"),
  ...folderIcon("folder_controller"),
  ...folderIcon("folder_controller_open"),
  ...folderIcon("folder_docker"),
  ...folderIcon("folder_docker_open"),
  ...folderIcon("folder_javascript"),
  ...folderIcon("folder_javascript_open"),
  ...folderIcon("folder_log"),
  ...folderIcon("folder_log_open"),
   ...folderIcon("folder_lua"),
  ...folderIcon("folder_lua_open"),
  ...folderIcon("folder_include"),
  ...folderIcon("folder_include_open"),
  ...folderIcon("folder_less"),
  ...folderIcon("folder_less_open"),
  ...folderIcon("folder_sass"),
  ...folderIcon("folder_sass_open"),
  ...folderIcon("folder_docs"),
  ...folderIcon("folder_docs_open"),
  ...folderIcon("folder_fonts"),
  ...folderIcon("folder_fonts_open"),
  ...folderIcon("folder_test"),
  ...folderIcon("folder_test_open"),
  ...folderIcon("folder_core"),
  ...folderIcon("folder_core_open"),
  ...folderIcon("folder_bower"),
  ...folderIcon("folder_bower_open"),
  ...folderIcon("folder_secure"),
  ...folderIcon("folder_secure_open"),
  ...folderIcon("folder_command"),
  ...folderIcon("folder_command_open"),
  ...folderIcon("folder_error"),
  ...folderIcon("folder_error_open"),
  ...folderIcon("folder_event"),
  ...folderIcon("folder_event_open"),
  ...folderIcon("folder_expo"),
  ...folderIcon("folder_expo_open"),
  ...folderIcon("folder_export"),
  ...folderIcon("folder_export_open"),
  ...folderIcon("folder_firebase"),
  ...folderIcon("folder_firebase_open"),
  ...folderIcon("folder_flow"),
  ...folderIcon("folder_flow_open"),
  ...folderIcon("folder_environment"),
  ...folderIcon("folder_environment_open"),
  ...folderIcon("folder_wordpress"),
  ...folderIcon("folder_wordpress_open"),
  ...folderIcon("folder_svelte"),
  ...folderIcon("folder_svelte_open"),
  ...folderIcon("folder_sublime"),
  ...folderIcon("folder_sublime_open"),
  ...folderIcon("folder_stylus"),
  ...folderIcon("folder_stylus_open"),
  ...folderIcon("folder_vm"),
  ...folderIcon("folder_vm_open"),
  ...folderIcon("folder_route"),
  ...folderIcon("folder_route_open"),
  ...folderIcon("folder_public"),
  ...folderIcon("folder_public_open"),
  ...folderIcon("folder_nuxt"),
  ...folderIcon("folder_nuxt_open"),
  ...folderIcon("folder_rules"),
  ...folderIcon("folder_rules_open"),
  ...folderIcon("folder_upload"),
  ...folderIcon("folder_upload_open"),
  ...folderIcon("folder_update"),
  ...folderIcon("folder_update_open"),
  ...folderIcon("folder_vuepress"),
  ...folderIcon("folder_vuepress_open"),
  ...folderIcon("folder_script"),
  ...folderIcon("folder_script_open"),
  ...folderIcon("folder_plugin"),
  ...folderIcon("folder_plugin_open"),
  ...folderIcon("folder_python"),
  ...folderIcon("folder_python_open"),
  ...folderIcon("folder_php"),
  ...folderIcon("folder_php_open"),
   ...folderIcon("folder_pinia_store"),
  ...folderIcon("folder_pinia_store_open"),
  ...folderIcon("folder_queue"),
  ...folderIcon("folder_queue_open"),
    ...folderIcon("folder_red_hat"),
  ...folderIcon("folder_red_hat_open"),
  ...folderIcon("folder_repository"),
  ...folderIcon("folder_repository_open"),
  ...folderIcon("folder_package"),
  ...folderIcon("folder_package_open"),
  ...folderIcon("folder_phpmailer"),
  ...folderIcon("folder_phpmailer_open"),
  ...folderIcon("folder_middleware"),
  ...folderIcon("folder_middleware_open"),
    ...folderIcon("folder_migration"),
  ...folderIcon("folder_migration_open"),
  ...folderIcon("folder_markdown"),
  ...folderIcon("folder_markdown_open"),
  ...folderIcon("folder_serverless"),
  ...folderIcon("folder_serverless_open"),
  ...folderIcon("folder_server"),
  ...folderIcon("folder_server_open"),
  ...folderIcon("folder_storage"),
  ...folderIcon("folder_storage_open"),
  ...folderIcon("folder_shared"),
  ...folderIcon("folder_shared_open"),
  ...folderIcon("folder_meta"),
  ...folderIcon("folder_meta_open"),
  ...folderIcon("folder_json"),
  ...folderIcon("folder_json_open"),
    ...folderIcon("folder_jwt"),
  ...folderIcon("folder_jwt_open"),
  ...folderIcon("folder_gradle"),
  ...folderIcon("folder_gradle_open"),
  ...folderIcon("folder_terraform"),
  ...folderIcon("folder_terraform_open"),
  ...folderIcon("folder_interface"),
  ...folderIcon("folder_interface_open"),
  ...folderIcon("folder_debug"),
  ...folderIcon("folder_debug_open"),
   ...folderIcon("folder_decorators"),
  ...folderIcon("folder_decorators_open"),
  ...folderIcon("folder_functions"),
  ...folderIcon("folder_functions_open"),
  ...folderIcon("folder_kubernetes"),
  ...folderIcon("folder_kubernetes_open"),
  ...folderIcon("folder_storybook"),
  ...folderIcon("folder_storybook_open"),
  ...folderIcon("folder_coverage"),
  ...folderIcon("folder_coverage_open"),
  ...folderIcon("folder_container"),
  ...folderIcon("folder_container_open"),
  ...folderIcon("folder_graphql"),
  ...folderIcon("folder_graphql_open"),
  ...folderIcon("folder_ios"),
  ...folderIcon("folder_ios_open"),
  ...folderIcon("folder_keys"),
  ...folderIcon("folder_keys_open"),
  ...folderIcon("folder_intellij"),
  ...folderIcon("folder_intellij_open"),
  ...folderIcon("folder_gulp"),
  ...folderIcon("folder_gulp_open"),
  ...folderIcon("folder_helper"),
  ...folderIcon("folder_helper_open"),
  ...folderIcon("folder_home"),
  ...folderIcon("folder_home_open"),
  ...folderIcon("folder_tasks"),
  ...folderIcon("folder_tasks_open"), 
   ...folderIcon("folder_tauri"),
  ...folderIcon("folder_tauri_open"),
  ...folderIcon("folder_syntax"),
  ...folderIcon("folder_syntax_open"),
  ...folderIcon("folder_stack"),
  ...folderIcon("folder_stack_open"),
  ...folderIcon("folder_contract"),
  ...folderIcon("folder_contract_open"),
  ...folderIcon("folder_admin"),
  ...folderIcon("folder_admin_open"),
  ...folderIcon("folder_quasar"),
  ...folderIcon("folder_quasar_open"), 
  ...folderIcon("folder_query"),
  ...folderIcon("folder_query_open"),
  ...folderIcon("folder_archive"),
  ...folderIcon("folder_archive_open"),
  ...folderIcon("folder_animation"),
  ...folderIcon("folder_animation_open"),
  ...folderIcon("folder_batch"),
  ...folderIcon("folder_batch_open"),
  ...folderIcon("folder_client"),
  ...folderIcon("folder_client_open"),
  ...folderIcon("folder_base"),
  ...folderIcon("folder_base_open"),
  ...folderIcon("folder_delta"),
  ...folderIcon("folder_delta_open"),
  ...folderIcon("folder_constant"),
  ...folderIcon("folder_constant_open"),
  ...folderIcon("folder_guard"),
  ...folderIcon("folder_guard_open"),
  ...folderIcon("folder_global"),
  ...folderIcon("folder_global_open"),
  ...folderIcon("folder_pipe"),
  ...folderIcon("folder_pipe_open"),
   ...folderIcon("folder_playwright"),
  ...folderIcon("folder_playwright_open"),
  ...folderIcon("folder_scala"),
  ...folderIcon("folder_scala_open"),
  ...folderIcon("folder_husky"),
  ...folderIcon("folder_husky_open"),
  ...folderIcon("folder_hook"),
  ...folderIcon("folder_hook_open"),
  ...folderIcon("folder_prisma"),
  ...folderIcon("folder_prisma_open"),
  ...folderIcon("folder_project"),
  ...folderIcon("folder_project_open"),
  ...folderIcon("folder_stencil"),
  ...folderIcon("folder_stencil_open"),
  ...folderIcon("folder_wakatime"),
  ...folderIcon("folder_wakatime_open"),
  ...folderIcon("folder_review"),
  ...folderIcon("folder_review_open"),
  ...folderIcon("folder_private"),
  ...folderIcon("folder_private_open"),
  ...folderIcon("folder_mock"),
  ...folderIcon("folder_mock_open"),
  ...folderIcon("folder_mjml"),
  ...folderIcon("folder_mjml_open"),
  ...folderIcon("folder_mobile"),
  ...folderIcon("folder_mobile_open"),
  ...folderIcon("folder_messages"),
  ...folderIcon("folder_messages_open"),
  ...folderIcon("folder_mail"),
  ...folderIcon("folder_mail_open"),
  ...folderIcon("folder_job"),
  ...folderIcon("folder_job_open"),
  ...folderIcon("folder_ansible"),
  ...folderIcon("folder_ansible_open"),
  ...folderIcon("folder_ci"),
  ...folderIcon("folder_ci_open"),
  ...folderIcon("folder_circleci"),
  ...folderIcon("folder_circleci_open"),
  ...folderIcon("folder_benchmark"),
  ...folderIcon("folder_benchmark_open"),
  ...folderIcon("folder_content"),
  ...folderIcon("folder_content_open"),
  ...folderIcon("folder_fastlane"),
  ...folderIcon("folder_fastlane_open"),
  ...folderIcon("folder_jinja"),
  ...folderIcon("folder_jinja_open"),
  ...folderIcon("folder_cart"),
  ...folderIcon("folder_cart_open"),
    ...folderIcon("folder_changesets"),
  ...folderIcon("folder_changesets_open"),
  ...folderIcon("folder_cluster"),
  ...folderIcon("folder_cluster_open"),
  ...folderIcon("folder_cobol"),
  ...folderIcon("folder_cobol_open"),
  ...folderIcon("folder_custom"),
  ...folderIcon("folder_custom_open"),
  ...folderIcon("folder_download"),
  ...folderIcon("folder_download_open"),
  ...folderIcon("folder_dump"),
  ...folderIcon("folder_dump_open"),
    ...folderIcon("folder_elixir"),
  ...folderIcon("folder_elixir_open"),
  ...folderIcon("folder_examples"),
  ...folderIcon("folder_examples_open"),
  ...folderIcon("folder_generator"),
  ...folderIcon("folder_generator_open"),
  ...folderIcon("folder_import"),
  ...folderIcon("folder_import_open"),
  ...folderIcon("folder_mappings"),
  ...folderIcon("folder_mappings_open"),
  ...folderIcon("folder_other"),
  ...folderIcon("folder_other_open"),
  ...folderIcon("folder_rust"),
  ...folderIcon("folder_rust_open"),
  ...folderIcon("folder_next"),
  ...folderIcon("folder_next_open"),
  ...icon("abc"),
  ...icon("azure-pipelines"),
  ...icon("astro"),
  ...icon("autohotkey"),
  ...icon("autoit"),
  ...icon("angular"),
  ...icon("angular-component"),
  ...icon("angular-directive"),
  ...icon("angular-guard"),
  ...icon("angular-pipe"),
  ...icon("angular-resolver"),
  ...icon("angular-service"),
  ...icon("ansible"),
  ...icon("actionscript"),
  ...icon("advpl_include"),
  ...icon("advpl_prw"),
  ...icon("advpl_ptm"),
  ...icon("advpl_tlpp"),
  ...icon("apiblueprint"),
  ...icon("appveyor"),
  ...icon("asciidoc"),
  ...icon("firebase"),
  ...icon("terraform"),
  ...icon("ember"),
  ...icon("blink"),
  ...icon("ballerina"),
  ...icon("bazel"),
  ...icon("bithound"),
  ...icon("blitz"),
  ...icon("bower"),
  ...icon("brainfuck"),
  ...icon("buck"),
  ...icon("bucklescript"),
  ...icon("buildkite"),
  ...icon("cmake"),
  ...icon("adonis"),
  ...icon("applescript"),
  ...icon("ada"),
  ...icon("android"),
  ...icon("arduino"),
  ...icon("elm"),
  ...icon("apollo"),
  ...icon("astyle"),
  ...icon("aurelia"),
  ...icon("azure"),
  ...icon("bitbucket"),
  ...icon("changelog"),
  ...icon("cabal"),
  ...icon("cake"),
  ...icon("capacitor"),
  ...icon("chess"),
  ...icon("circleci"),
  ...icon("clojure"),
  ...icon("cloudfoundry"),
  ...icon("coala"),
  ...icon("cobol"),
  ...icon("coconut"),
  ...icon("code-climate"),
  ...icon("codecov"),
  ...icon("codeowners"),
  ...icon("coffee"),
  ...icon("coldfusion"),
  ...icon("command"),
  ...icon("commitlint"),
  ...icon("contributing"),
  ...icon("credits"),
  ...icon("crystal"),
  ...icon("cucumber"),
  ...icon("cuda"),
  ...icon("cypress"),
  ...icon("d"),
  ...icon("database"),
  ...icon("deno"),
  ...icon("denizenscript"),
  ...icon("dependabot"),
  ...icon("h"),
  ...icon("dhall"),
  ...icon("dinophp"),
  ...icon("disc"),
  ...icon("dotjs"),
  ...icon("drawio"),
  ...icon("drone"),
  ...icon("dune"),
  ...icon("edge"),
  ...icon("ejs"),
  ...icon("email"),
  ...icon("exe"),
  ...icon("fastlane"),
  ...icon("figma"),
  ...icon("flash"),
  ...icon("flow"),
  ...icon("forth"),
  ...icon("fortran"),
  ...icon("foxpro"),
  ...icon("fsharp"),
  ...icon("fusebox"),
  ...icon("gatsby"),
  ...icon("gcp"),
  ...icon("gemfile"),
  ...icon("gemini"),
  ...icon("gitpod"),
  ...icon("godot"),
  ...icon("godot-assets"),
  ...icon("grain"),
  ...icon("graphcool"),
  ...icon("gridsome"),
  ...icon("hack"),
  ...icon("haxe"),
  ...icon("hcl"),
  ...icon("helm"),
  ...icon("heroku"),
  ...icon("hex"),
  ...icon("horusec"),
  ...icon("hpp"),
  ...icon("http"),
  ...icon("husky"),
  ...icon("hygen"),
  ...icon("i18n"),
  ...icon("idris"),
  ...icon("imba"),
  ...icon("ionic"),
  ...icon("istanbul"),
  ...icon("jar"),
  ...icon("java"),
  ...icon("javaclass"),
  ...icon("jenkins"),
  ...icon("jupyter"),
  ...icon("key"),
  ...icon("kivy"),
  ...icon("kotlin"),
  ...icon("authors"),
  ...icon("auto"),
  ...icon("django"),
  ...icon("word"),
  ...icon("windicss"),
  ...icon("vim"),
  ...icon("svelte"),
  ...icon("sass"),
  ...icon("less"),
  ...icon("stylus"),
  ...icon("postcssconfig"),
  ...icon("docker"),
  ...icon("git"),
  ...icon("readme"),
  ...icon("html"),
  ...icon("json"),
  ...icon("markdown"),
  ...icon("makefile"),
  ...icon("mdx"),
  ...icon("mdsvex"),
  ...icon("merlin"),
  ...icon("meson"),
  ...icon("minecraft"),
  ...icon("mocha"),
  ...icon("moonscript"),
  ...icon("moon"),
  ...icon("mxml"),
  ...icon("ndst"),
  ...icon("nix"),
  ...icon("npm"),
  ...icon("nrwl"),
  ...icon("nuget"),
  ...icon("ocaml"),
  ...icon("odin"),
  ...icon("opa"),
  ...icon("opam"),
  ...icon("pawn"),
  ...icon("percy"),
  ...icon("perl"),
  ...icon("pipeline"),
  ...icon("playwright"),
  ...icon("powerpoint"),
  ...icon("processing"),
  ...icon("posthtml"),
  ...icon("proto"),
  ...icon("protractor"),
  ...icon("puppet"),
  ...icon("purescript"),
  ...icon("python-misc"),
  ...icon("qsharp"),
  ...icon("r"),
  ...icon("racket"),
  ...icon("raml"),
  ...icon("routing"),
  ...icon("reason"),
  ...icon("red"),
  ...icon("redhat"),
  ...icon("renovate"),
  ...icon("replit"),
  ...icon("restql"),
  ...icon("riot"),
  ...icon("roadmap"),
  ...icon("rome"),
  ...icon("scala"),
  ...icon("scheme"),
  ...icon("search"),
  ...icon("semantic-release"),
  ...icon("sentry"),
  ...icon("serverless"),
  ...icon("sequelize"),
  ...icon("settings"),
  ...icon("sketch"),
  ...icon("snowpack"),
  ...icon("san"),
  ...icon("sas"),
  ...icon("sbt"),
  ...icon("shaderlab"),
  ...icon("siyuan"),
  ...icon("slim"),
  ...icon("sublime"),
  ...icon("slug"),
  ...icon("snyk"),
  ...icon("solidity"),
  ...icon("stencil"),
  ...icon("stitches"),
  ...icon("svgr"),
  ...icon("testjsx"),
  ...icon("stryker"),
  ...icon("svgo"),
  ...icon("swc"),
  ...icon("table"),
  ...icon("tauri"),
  ...icon("tcl"),
  ...icon("teal"),
  ...icon("tobimake"),
  ...icon("todo"),
  ...icon("template"),
  ...icon("tex"),
  ...icon("textlint"),
  ...icon("twine"),
  ...icon("uml"),
  ...icon("sml"),
  ...icon("vue-config"),
  ...icon("wallaby"),
  ...icon("watchman"),
  ...icon("css"),
  ...icon("go-mod"),
  ...icon("cssmap"),
  ...icon("js"),
  ...icon("jsmap"),
  ...icon("typescript"),
  ...icon("typescriptdef"),
  ...icon("vue"),
  ...icon("image"),
  ...icon("favicon"),
  ...icon("zip"),
  ...icon("yarn"),
  ...icon("error"),
  ...icon("nodejs"),
  ...icon("svg"),
  ...icon("yaml"),
  ...icon("font"),
  ...icon("php"),
  ...icon("phpunit"),
  ...icon("twig"),
  ...icon("composer"),
  ...icon("xml"),
  ...icon("robots"),
  ...icon("bundler"),
  ...icon("stylelint"),
  ...icon("prettier"),
  ...icon("python"),
  ...icon("log"),
  ...icon("audio"),
  ...icon("lua"),
  ...icon("csharp"),
  ...icon("dart"),
  ...icon("eslint"),
  ...icon("handlebars"),
  ...icon("webpack"),
  ...icon("ruby"),
  ...icon("jest"),
  ...icon("babel"),
  ...icon("elixir"),
  ...icon("rust"),
  ...icon("react"),
  ...icon("reactts"),
  ...icon("rollup"),
  ...icon("gulp"),
  ...icon("grunt"),
  ...icon("editorconfig"),
  ...icon("vscode"),
  ...icon("visualstudio"),
  ...icon("ai"),
  ...icon("photoshop"),
  ...icon("pdf"),
  ...icon("go"),
  ...icon("browserslist"),
  ...icon("erlang"),
  ...icon("vite"),
  ...icon("vitest"),
  ...icon("mint"),
  ...icon("env"),
  ...icon("nginx"),
  ...icon("c"),
  ...icon("cpp"),
  ...icon("powershell"),
  ...icon("blade"),
  ...icon("liquid"),
  ...icon("pug"),
  ...icon("swift"),
  ...icon("graphql"),
  ...icon("groovy"),
  ...icon("testjs"),
  ...icon("testts"),
  ...icon("storybook"),
  ...icon("webassembly"),
  ...icon("console"),
  ...icon("bat"),
  ...icon("nuxt"),
  ...icon("next"),
  ...icon("netlify"),
  ...icon("vercel"),
  ...icon("tailwind"),
  ...icon("windi"),
  ...icon("nodemon"),
  ...icon("jinja"),
  ...icon("haml"),
  ...icon("smarty"),
  ...icon("haskell"),
  ...icon("gradle"),
  ...icon("nim"),
  ...icon("nestjs"),
  ...icon("jenkins"),
  ...icon("txt"),
  ...icon("assembly"),
  ...icon("certificate"),
  ...icon("prisma"),
  ...icon("compodoc"),
  ...icon("julia"),
  ...icon("csv"),
  ...icon("karma"),
  ...icon("kl"),
  ...icon("kusto"),
  ...icon("lerna"),
  ...icon("lib"),
  ...icon("lighthouse"),
  ...icon("lisp"),
  ...icon("livescript"),
  ...icon("lilypond"),
  ...icon("tsconfig"),
  ...icon("jsconfig"),
  ...icon("travis"),
  ...icon("razor"),
  ...icon("jsp"),
  ...icon("avi"),
  ...icon("video"),
  ...icon("pnpm"),
  ...icon("remix"),
  ...icon("mjml"),
  ...icon("markojs"),
  ...icon("mathematica"),
  ...icon("matlab"),
  ...icon("maven"),
  ...icon("modernizr"),
  ...icon("quasar"),
  ...icon("rubocop"),
  ...icon("rescript"),
  ...icon("bsconfig"),
  ...icon("opengl"),
  ...icon("llvm"),
  ...icon("bicep"),
  ...icon("prolog"),
  ...icon("lock"),
  ...icon("lolcode"),
  ...icon("php-cs-fixer"),
  ...icon("3d"),
  ...icon("yang"),
  ...icon("xaml"),
  ...icon("wolframlanguage"),
  ...icon("zig"),
  ...icon("webhint"),
  ...icon("wakatime"),
  ...icon("vlang"),
  ...icon("virtual"),
  ...icon("vfl"),
  ...icon("verilog"),
  ...icon("velocity"),
  ...icon("vala"),
  ...icon("vagrant"),
  ...icon("url"),
  ...icon("turborepo"),
  ...icon("steadybit"),
  ...icon("tobi"),
};

export default icons;
