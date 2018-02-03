# Try to find the crossguid Library Library https://github.com/graeme-hill/crossguid.git
# We use this library header only!, so we dont build it!
# defines crossguid_INCLUDE_DIR
include(FindPackageHandleStandardArgs)

if(NOT EXISTS "${crossguid_INCLUDE_DIR}")
    message(STATUS "crossguid library: include dir not found -> download from https://github.com/graeme-hill/crossguid.git")

    include(DownloadProject)
    download_project(PROJ               crossguid
                    PREFIX              "${ExecutionGraph_EXTERNAL_BUILD_DIR}/crossguid"
                    GIT_REPOSITORY      https://github.com/graeme-hill/crossguid.git
                    GIT_TAG             e6c8514
                    GIT_SHALLOW         ON
                    ${UPDATE_DISCONNECTED_IF_AVAILABLE}
    )
    set(crossguid_SOURCE_DIR "${crossguid_SOURCE_DIR}" CACHE PATH "crossguid library src dir" FORCE)
    set(crossguid_BINARY_DIR "${crossguid_BINARY_DIR}" CACHE PATH "crossguid library binary dir" FORCE)
    set(crossguid_INCLUDE_DIR "${crossguid_SOURCE_DIR}" CACHE PATH "crossguid library (https://github.com/graeme-hill/crossguid.git) include directory" FORCE)
else()
    message(STATUS "crossguid library found!")
endif()

find_package_handle_standard_args(CrossGUIDLib DEFAULT_MSG crossguid_INCLUDE_DIR)
mark_as_advanced(crossguid_INCLUDE_DIR)

# build the library
set(XG_TESTS OFF)
add_subdirectory(${crossguid_SOURCE_DIR} ${crossguid_BINARY_DIR} EXCLUDE_FROM_ALL)

add_library(crossguidLib INTERFACE IMPORTED)
set_property(TARGET crossguidLib PROPERTY INTERFACE_INCLUDE_DIRECTORIES ${crossguid_INCLUDE_DIR})
set_property(TARGET crossguidLib PROPERTY INTERFACE_LINK_LIBRARIES xg)
message(STATUS "crossguid library added target: crossguidLib")