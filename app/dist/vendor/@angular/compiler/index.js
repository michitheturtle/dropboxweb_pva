/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * Starting point to import all compiler APIs.
 */
var i18n = require('./src/i18n/index');
exports.i18n = i18n;
var compiler_1 = require('./src/compiler');
exports.COMPILER_PROVIDERS = compiler_1.COMPILER_PROVIDERS;
exports.CompileDiDependencyMetadata = compiler_1.CompileDiDependencyMetadata;
exports.CompileDirectiveMetadata = compiler_1.CompileDirectiveMetadata;
exports.CompileFactoryMetadata = compiler_1.CompileFactoryMetadata;
exports.CompileIdentifierMetadata = compiler_1.CompileIdentifierMetadata;
exports.CompileMetadataWithIdentifier = compiler_1.CompileMetadataWithIdentifier;
exports.CompilePipeMetadata = compiler_1.CompilePipeMetadata;
exports.CompileProviderMetadata = compiler_1.CompileProviderMetadata;
exports.CompileQueryMetadata = compiler_1.CompileQueryMetadata;
exports.CompileTemplateMetadata = compiler_1.CompileTemplateMetadata;
exports.CompileTokenMetadata = compiler_1.CompileTokenMetadata;
exports.CompileTypeMetadata = compiler_1.CompileTypeMetadata;
exports.CompilerConfig = compiler_1.CompilerConfig;
exports.DEFAULT_PACKAGE_URL_PROVIDER = compiler_1.DEFAULT_PACKAGE_URL_PROVIDER;
exports.DirectiveResolver = compiler_1.DirectiveResolver;
exports.NgModuleResolver = compiler_1.NgModuleResolver;
exports.OfflineCompiler = compiler_1.OfflineCompiler;
exports.PipeResolver = compiler_1.PipeResolver;
exports.RenderTypes = compiler_1.RenderTypes;
exports.RuntimeCompiler = compiler_1.RuntimeCompiler;
exports.SourceModule = compiler_1.SourceModule;
exports.TEMPLATE_TRANSFORMS = compiler_1.TEMPLATE_TRANSFORMS;
exports.UrlResolver = compiler_1.UrlResolver;
exports.XHR = compiler_1.XHR;
exports.analyzeAppProvidersForDeprecatedConfiguration = compiler_1.analyzeAppProvidersForDeprecatedConfiguration;
exports.createOfflineCompileUrlResolver = compiler_1.createOfflineCompileUrlResolver;
exports.platformCoreDynamic = compiler_1.platformCoreDynamic;
var interpolation_config_1 = require('./src/ml_parser/interpolation_config');
exports.InterpolationConfig = interpolation_config_1.InterpolationConfig;
var element_schema_registry_1 = require('./src/schema/element_schema_registry');
exports.ElementSchemaRegistry = element_schema_registry_1.ElementSchemaRegistry;
__export(require('./src/template_parser/template_ast'));
__export(require('./private_export'));
//# sourceMappingURL=index.js.map