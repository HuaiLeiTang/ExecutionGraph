// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_DATATYPES_H_
#define FLATBUFFERS_GENERATED_DATATYPES_H_

#include "flatbuffers/flatbuffers.h"

struct Vector2f;

struct Vector2d;

struct Vector3d;

struct Box2f;

FLATBUFFERS_MANUALLY_ALIGNED_STRUCT(4) Vector2f FLATBUFFERS_FINAL_CLASS {
 private:
  float x_;
  float y_;

 public:
  Vector2f() {
    memset(this, 0, sizeof(Vector2f));
  }
  Vector2f(float _x, float _y)
      : x_(flatbuffers::EndianScalar(_x)),
        y_(flatbuffers::EndianScalar(_y)) {
  }
  float x() const {
    return flatbuffers::EndianScalar(x_);
  }
  float y() const {
    return flatbuffers::EndianScalar(y_);
  }
};
FLATBUFFERS_STRUCT_END(Vector2f, 8);

FLATBUFFERS_MANUALLY_ALIGNED_STRUCT(8) Vector2d FLATBUFFERS_FINAL_CLASS {
 private:
  double x_;
  double y_;

 public:
  Vector2d() {
    memset(this, 0, sizeof(Vector2d));
  }
  Vector2d(double _x, double _y)
      : x_(flatbuffers::EndianScalar(_x)),
        y_(flatbuffers::EndianScalar(_y)) {
  }
  double x() const {
    return flatbuffers::EndianScalar(x_);
  }
  double y() const {
    return flatbuffers::EndianScalar(y_);
  }
};
FLATBUFFERS_STRUCT_END(Vector2d, 16);

FLATBUFFERS_MANUALLY_ALIGNED_STRUCT(8) Vector3d FLATBUFFERS_FINAL_CLASS {
 private:
  double x_;
  double y_;
  double z_;

 public:
  Vector3d() {
    memset(this, 0, sizeof(Vector3d));
  }
  Vector3d(double _x, double _y, double _z)
      : x_(flatbuffers::EndianScalar(_x)),
        y_(flatbuffers::EndianScalar(_y)),
        z_(flatbuffers::EndianScalar(_z)) {
  }
  double x() const {
    return flatbuffers::EndianScalar(x_);
  }
  double y() const {
    return flatbuffers::EndianScalar(y_);
  }
  double z() const {
    return flatbuffers::EndianScalar(z_);
  }
};
FLATBUFFERS_STRUCT_END(Vector3d, 24);

FLATBUFFERS_MANUALLY_ALIGNED_STRUCT(4) Box2f FLATBUFFERS_FINAL_CLASS {
 private:
  Vector2f positionMin_;
  Vector2f positionMax_;

 public:
  Box2f() {
    memset(this, 0, sizeof(Box2f));
  }
  Box2f(const Vector2f &_positionMin, const Vector2f &_positionMax)
      : positionMin_(_positionMin),
        positionMax_(_positionMax) {
  }
  const Vector2f &positionMin() const {
    return positionMin_;
  }
  const Vector2f &positionMax() const {
    return positionMax_;
  }
};
FLATBUFFERS_STRUCT_END(Box2f, 16);

#endif  // FLATBUFFERS_GENERATED_DATATYPES_H_
