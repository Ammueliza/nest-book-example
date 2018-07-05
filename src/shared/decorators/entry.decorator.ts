import { PipeTransform, createParamDecorator } from '@nestjs/common';

export const Entry: (
	data?: any,
	...pipes: Array<PipeTransform<any>>
) => ParameterDecorator = createParamDecorator((data, req) => {
	return req.entry;
});
